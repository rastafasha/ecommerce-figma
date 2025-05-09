import React from 'react';
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ visible, onClose }) => {
  const renderSection = (title: string, items: { label: string; value?: string }[]) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Text style={styles.itemLabel}>{item.label}</Text>
          <View style={styles.itemRight}>
            {item.value && <Text style={styles.itemValue}>{item.value}</Text>}
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Settings</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {renderSection('Personal', [
              { label: 'Profile' },
              { label: 'Shipping Address' },
              { label: 'Payment methods' },
            ])}
            {renderSection('Shop', [
              { label: 'Country', value: 'Vietnam' },
              { label: 'Currency', value: '$ USD' },
              { label: 'Sizes', value: 'UK' },
              { label: 'Terms and Conditions' },
            ])}
            {renderSection('Account', [
              { label: 'Language', value: 'English' },
              { label: 'About Slada' },
            ])}
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete My Account</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Slada</Text>
              <Text style={styles.footerSubText}>Version 1.0 April, 2020</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 12,
    paddingBottom: 20,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 4,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 16,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemValue: {
    marginRight: 8,
    color: '#666',
  },
  deleteButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  deleteButtonText: {
    color: '#FF3366',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default SettingsModal;
