import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  itemCountBadge: {
    backgroundColor: '#E6F0FF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
  },
  itemCountText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  shippingAddressContainer: {
    margin: 20,
  },
  shippingAddressTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  shippingAddressBox: {
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shippingAddressText: {
    flex: 1,
    fontSize: 14,
  },
  editButton: {
    marginLeft: 10,
  },
  cartItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cartItemDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  cartItemAttributes: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  cartItemBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartItemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#FF3366',
    borderRadius: 20,
    padding: 6,
    marginLeft: 10,
  },
  wishlistTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 20,
  },
  wishlistItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
    alignItems: 'center',
  },
  wishlistItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  wishlistItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  wishlistItemDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  wishlistItemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  wishlistItemAttributes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#F0F3FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
  },
  addToCartButton: {
    marginLeft: 10,
  },
  checkoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkoutButton: {
    backgroundColor: '#0066FF',
    borderRadius: 25,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default cartStyles;
