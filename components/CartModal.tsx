import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

interface CartItem {
  id: string;
  image: any;
  description: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

interface WishlistItem {
  id: string;
  image: any;
  description: string;
  price: number;
  color: string;
  size: string;
}

interface CartModalProps {
  visible: boolean;
  onClose: () => void;
}

const sampleCartItems: CartItem[] = [
  {
    id: '1',
    image: require('../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    color: 'Pink',
    size: 'M',
    price: 17.0,
    quantity: 1,
  },
  {
    id: '2',
    image: require('../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    color: 'Pink',
    size: 'M',
    price: 17.0,
    quantity: 1,
  },
];

const sampleWishlistItems: WishlistItem[] = [
  {
    id: '1',
    image: require('../assets/images/products/3.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
    color: 'Pink',
    size: 'M',
  },
  {
    id: '2',
    image: require('../assets/images/products/4.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
    color: 'Pink',
    size: 'M',
  },
];

const CartModal: React.FC<CartModalProps> = ({ visible, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(sampleCartItems);

  const incrementQuantity = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Cart</Text>
            <View style={styles.itemCountBadge}>
              <Text style={styles.itemCountText}>{cartItems.length}</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {/* Shipping Address */}
            <View style={styles.shippingAddressContainer}>
              <Text style={styles.shippingAddressTitle}>Shipping Address</Text>
              <View style={styles.shippingAddressBox}>
                <Text style={styles.shippingAddressText}>
                  26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city
                </Text>
                <TouchableOpacity style={styles.editButton}>
                  <Ionicons name="pencil" size={20} color="#0066FF" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Cart Items */}
            {cartItems.map(item => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={item.image} style={styles.cartItemImage} />
                <View style={styles.cartItemDetails}>
                  <Text style={styles.cartItemDescription}>{item.description}</Text>
                  <Text style={styles.cartItemAttributes}>{item.color}, Size {item.size}</Text>
                  <View style={styles.cartItemBottomRow}>
                    <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                    <View style={styles.quantityControls}>
                      <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                        <Ionicons name="remove-outline" size={20} color="#0066FF" />
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                        <Ionicons name="add-outline" size={20} color="#0066FF" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteButton}>
                  <Ionicons name="trash-outline" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}

            {/* Wishlist */}
            <Text style={styles.wishlistTitle}>From Your Wishlist</Text>
            {sampleWishlistItems.map(item => (
              <View key={item.id} style={styles.wishlistItem}>
                <Image source={item.image} style={styles.wishlistItemImage} />
                <View style={styles.wishlistItemDetails}>
                  <Text style={styles.wishlistItemDescription}>{item.description}</Text>
                  <Text style={styles.wishlistItemPrice}>${item.price.toFixed(2)}</Text>
                  <View style={styles.wishlistItemAttributes}>
                    <View style={styles.tag}>
                      <Text>{item.color}</Text>
                    </View>
                    <View style={styles.tag}>
                      <Text>{item.size}</Text>
                    </View>
                    <TouchableOpacity style={styles.addToCartButton}>
                      <Ionicons name="cart-outline" size={24} color="#0066FF" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Total and Checkout */}
          <View style={styles.checkoutContainer}>
            <Text style={styles.totalText}>Total ${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
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
  closeButton: {
    padding: 5,
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

export default CartModal;
