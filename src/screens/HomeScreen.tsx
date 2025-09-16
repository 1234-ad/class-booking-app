import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Class, Level, Filters } from '../types';
import { mockClasses } from '../data/mockData';
import { simulateBooking } from '../utils/booking';
import ClassCard from '../components/ClassCard';
import FilterChips from '../components/FilterChips';
import InstructorFilter from '../components/InstructorFilter';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';

const HomeScreen: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingClassId, setBookingClassId] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    level: null,
    instructor: null,
  });

  // Extract unique instructors from classes
  const instructors = useMemo(() => {
    const uniqueInstructors = Array.from(
      new Set(mockClasses.map(cls => cls.instructor))
    );
    return uniqueInstructors.sort();
  }, []);

  // Filter classes based on current filters
  const filteredClasses = useMemo(() => {
    return classes.filter(cls => {
      const levelMatch = !filters.level || cls.level === filters.level;
      const instructorMatch = !filters.instructor || cls.instructor === filters.instructor;
      return levelMatch && instructorMatch;
    });
  }, [classes, filters]);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setClasses(mockClasses);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleBookClass = async (classId: string) => {
    setBookingClassId(classId);

    // Optimistic update
    setClasses(prevClasses =>
      prevClasses.map(cls =>
        cls.id === classId ? { ...cls, isBooked: true } : cls
      )
    );

    try {
      const success = await simulateBooking();
      
      if (!success) {
        // Rollback on failure
        setClasses(prevClasses =>
          prevClasses.map(cls =>
            cls.id === classId ? { ...cls, isBooked: false } : cls
          )
        );
        
        Alert.alert(
          'Booking Failed',
          'Sorry, we couldn\'t book this class. Please try again.',
          [{ text: 'OK' }]
        );
      } else {
        Alert.alert(
          'Booking Successful!',
          'Your class has been booked successfully.',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      // Rollback on error
      setClasses(prevClasses =>
        prevClasses.map(cls =>
          cls.id === classId ? { ...cls, isBooked: false } : cls
        )
      );
      
      Alert.alert(
        'Error',
        'An unexpected error occurred. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setBookingClassId(null);
    }
  };

  const handleLevelFilter = (level: Level | null) => {
    setFilters(prev => ({ ...prev, level }));
  };

  const handleInstructorFilter = (instructor: string | null) => {
    setFilters(prev => ({ ...prev, instructor }));
  };

  const clearFilters = () => {
    setFilters({ level: null, instructor: null });
  };

  if (loading) {
    return <LoadingSpinner message="Loading classes..." />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Browse Classes</Text>
      </View>

      <FilterChips
        selectedLevel={filters.level}
        onLevelSelect={handleLevelFilter}
      />

      <InstructorFilter
        instructors={instructors}
        selectedInstructor={filters.instructor}
        onInstructorSelect={handleInstructorFilter}
      />

      {filteredClasses.length === 0 ? (
        <EmptyState
          message="No classes match your current filters. Try adjusting your selection to see more options."
          onClearFilters={clearFilters}
        />
      ) : (
        <FlatList
          data={filteredClasses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ClassCard
              classItem={item}
              onBook={handleBookClass}
              isBooking={bookingClassId === item.id}
            />
          )}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default HomeScreen;