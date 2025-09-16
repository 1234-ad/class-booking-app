import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InstructorFilterProps {
  instructors: string[];
  selectedInstructor: string | null;
  onInstructorSelect: (instructor: string | null) => void;
}

const InstructorFilter: React.FC<InstructorFilterProps> = ({
  instructors,
  selectedInstructor,
  onInstructorSelect,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleInstructorSelect = (instructor: string | null) => {
    onInstructorSelect(instructor);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.filterButtonText}>
          {selectedInstructor || 'All Instructors'}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Instructor</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={[null, ...instructors]}
              keyExtractor={(item, index) => item || `all-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.instructorItem,
                    selectedInstructor === item && styles.selectedInstructorItem,
                  ]}
                  onPress={() => handleInstructorSelect(item)}
                >
                  <Text
                    style={[
                      styles.instructorText,
                      selectedInstructor === item && styles.selectedInstructorText,
                    ]}
                  >
                    {item || 'All Instructors'}
                  </Text>
                  {selectedInstructor === item && (
                    <Ionicons name="checkmark" size={20} color="#007AFF" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterButtonText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  closeButton: {
    padding: 4,
  },
  instructorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  selectedInstructorItem: {
    backgroundColor: '#F0F8FF',
  },
  instructorText: {
    fontSize: 16,
    color: '#333',
  },
  selectedInstructorText: {
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default InstructorFilter;