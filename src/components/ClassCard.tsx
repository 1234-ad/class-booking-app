import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Class } from '../types';

interface ClassCardProps {
  classItem: Class;
  onBook: (classId: string) => void;
  isBooking: boolean;
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem, onBook, isBooking }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return '#4CAF50';
      case 'Intermediate':
        return '#FF9800';
      case 'Advanced':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  const handleBookPress = () => {
    if (classItem.isBooked) {
      Alert.alert('Already Booked', 'You have already booked this class.');
      return;
    }
    onBook(classItem.id);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.className}>{classItem.name}</Text>
        <View style={[styles.levelBadge, { backgroundColor: getLevelColor(classItem.level) }]}>
          <Text style={styles.levelText}>{classItem.level}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.detailText}>Instructor: {classItem.instructor}</Text>
        <Text style={styles.detailText}>Center: {classItem.center}</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.bookButton,
          classItem.isBooked && styles.bookedButton,
          isBooking && styles.bookingButton,
        ]}
        onPress={handleBookPress}
        disabled={isBooking || classItem.isBooked}
      >
        <Text style={[
          styles.bookButtonText,
          classItem.isBooked && styles.bookedButtonText,
        ]}>
          {isBooking ? 'Booking...' : classItem.isBooked ? 'Booked' : 'Quick Book'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  className: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  details: {
    marginBottom: 16,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookedButton: {
    backgroundColor: '#E0E0E0',
  },
  bookingButton: {
    backgroundColor: '#B0B0B0',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bookedButtonText: {
    color: '#666',
  },
});

export default ClassCard;