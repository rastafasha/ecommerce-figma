import { StyleSheet } from 'react-native';


const settingModalStyles = StyleSheet.create({
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



export default settingModalStyles;
