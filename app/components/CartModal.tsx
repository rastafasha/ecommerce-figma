import { CartItem } from '@/app/interface/cartInterfase';
import { sampleCartItems, sampleWishlistItems } from '@/app/mock/cartSample';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../routes';
import cartModalStyles from './styles/cartModalStyles';


interface CartModalProps {
  visible: boolean;
  onClose: () => void;
}


export const CartModal: React.FC<CartModalProps> = ({ visible, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(sampleCartItems);
  const router = useRouter();
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
    <Modal visible={visible} 
    animationType="slide" 
    transparent={true} 
    onRequestClose={onClose}
    >
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
<TouchableOpacity style={styles.checkoutButton} onPress={() => { onClose(); router.push(ROUTES.PAYMENT as any); }}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create(cartModalStyles);

export default CartModal;

