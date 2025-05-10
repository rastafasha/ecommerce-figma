import { StyleSheet } from 'react-native';

const paymentStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '90%',
    maxHeight: '90%',
    borderRadius: 20,
    padding: 20,
    position: 'relative',
  },
  backButton: {
    paddingRight: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
  editButton: {
    padding: 5,
  },
  infoBox: {
    backgroundColor: '#f7f8fc',
    borderRadius: 10,
    padding: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  itemCountBadge: {
    backgroundColor: '#d9e6ff',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
  },
  itemCountText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  addVoucherButton: {
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  addVoucherText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemImageWrapper: {
    position: 'relative',
    marginRight: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemQuantityBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#0066FF',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  itemQuantityText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemDescription: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  shippingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d9e6ff',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  shippingOptionSelected: {
    borderColor: '#0066FF',
    backgroundColor: '#d9e6ff',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0066FF',
  },
  shippingOptionText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  shippingOptionDuration: {
    backgroundColor: '#d9e6ff',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
    fontSize: 12,
    color: '#0066FF',
  },
  shippingOptionPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  shippingNote: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  paymentMethodBadge: {
    backgroundColor: '#d9e6ff',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  paymentMethodText: {
    color: '#0066FF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  payButton: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default paymentStyles;
