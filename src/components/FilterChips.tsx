import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Level } from '../types';

interface FilterChipsProps {
  selectedLevel: Level | null;
  onLevelSelect: (level: Level | null) => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({ selectedLevel, onLevelSelect }) => {
  const levels: Level[] = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <TouchableOpacity
        style={[styles.chip, !selectedLevel && styles.selectedChip]}
        onPress={() => onLevelSelect(null)}
      >
        <Text style={[styles.chipText, !selectedLevel && styles.selectedChipText]}>
          All Levels
        </Text>
      </TouchableOpacity>
      
      {levels.map((level) => (
        <TouchableOpacity
          key={level}
          style={[styles.chip, selectedLevel === level && styles.selectedChip]}
          onPress={() => onLevelSelect(selectedLevel === level ? null : level)}
        >
          <Text style={[styles.chipText, selectedLevel === level && styles.selectedChipText]}>
            {level}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chip: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedChip: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  chipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedChipText: {
    color: '#fff',
  },
});

export default FilterChips;