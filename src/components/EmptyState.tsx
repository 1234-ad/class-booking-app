import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EmptyStateProps {
  message: string;
  onClearFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, onClearFilters }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={64} color="#CCC" />
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.clearButton} onPress={onClearFilters}>
        <Text style={styles.clearButtonText}>Clear Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#F8F9FA',
  },
  message: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 24,
  },
  clearButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EmptyState;