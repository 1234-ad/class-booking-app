import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { mockUser } from '../data/mockData';
import { User } from '../types';

const ProfileScreen: React.FC = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedName, setEditedName] = useState(user.name);

  const handleSaveName = () => {
    if (editedName.trim().length === 0) {
      Alert.alert('Error', 'Name cannot be empty');
      return;
    }
    
    setUser(prev => ({ ...prev, name: editedName.trim() }));
    setEditModalVisible(false);
    Alert.alert('Success', 'Name updated successfully!');
  };

  const handleCancelEdit = () => {
    setEditedName(user.name);
    setEditModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={48} color="#666" />
          </View>
        </View>

        {/* User Information */}
        <View style={styles.infoContainer}>
          {/* Name with Edit Button */}
          <View style={styles.infoRow}>
            <View style={styles.infoContent}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{user.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setEditModalVisible(true)}
            >
              <Ionicons name="pencil" size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>

          {/* Mobile Number */}
          <View style={styles.infoRow}>
            <View style={styles.infoContent}>
              <Text style={styles.label}>Mobile Number</Text>
              <Text style={styles.value}>{user.mobile}</Text>
            </View>
          </View>

          {/* Credits */}
          <View style={styles.infoRow}>
            <View style={styles.infoContent}>
              <Text style={styles.label}>Membership Credits</Text>
              <Text style={[styles.value, styles.creditsValue]}>
                Credits: {user.credits}
              </Text>
            </View>
          </View>

          {/* City */}
          <View style={styles.infoRow}>
            <View style={styles.infoContent}>
              <Text style={styles.label}>City</Text>
              <Text style={styles.value}>{user.city}</Text>
            </View>
          </View>

          {/* Joined Date */}
          <View style={styles.infoRow}>
            <View style={styles.infoContent}>
              <Text style={styles.label}>Member Since</Text>
              <Text style={styles.value}>{user.joinedDate}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Edit Name Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={handleCancelEdit}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Edit Name</Text>
              <TouchableOpacity
                onPress={handleCancelEdit}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.textInput}
                value={editedName}
                onChangeText={setEditedName}
                placeholder="Enter your name"
                autoFocus
                maxLength={50}
              />
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancelEdit}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveName}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  content: {
    flex: 1,
    paddingTop: 32,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  infoContent: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  creditsValue: {
    color: '#007AFF',
    fontWeight: '600',
  },
  editButton: {
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '90%',
    maxWidth: 400,
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
  modalBody: {
    padding: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProfileScreen;