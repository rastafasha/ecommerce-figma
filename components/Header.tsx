// Header.tsx
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import SearchModal from './SearchModal';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartModal from './CartModal';

// Define the navigation type
type RootStackParamList = {
  Home: undefined;
  FlashSale: undefined;
  ProductDetail: { productId: string };
  Cart: undefined;
  // Add other screens as needed
};

type HeaderNavigationProp = StackNavigationProp<RootStackParamList, 'FlashSale'>;

type HeaderProps = {
  navigation: HeaderNavigationProp;
  onSearchPress?: () => void; // Added onSearchPress property
  onCartPress?: () => void; // Added onCartPress property
};



const { width, height } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

export const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [cartModalVisible, setCartModalVisible] = useState(false);

  const openSearchModal = () => {
    setSearchModalVisible(true);
  };

  const closeSearchModal = () => {
    setSearchModalVisible(false);
  };
  const openCartModal = () => {
    setCartModalVisible(true);
  };

  const closeCartModal = () => {
    setCartModalVisible(false);
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Flash Sale</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={openSearchModal} style={styles.iconButton}>
            <Ionicons name="search-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openCartModal} style={styles.iconButton}>
            <Ionicons name="cart-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <SearchModal visible={searchModalVisible} onClose={closeSearchModal} />
      <CartModal visible={cartModalVisible} onClose={closeCartModal} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
 
 
});

export default Header;
