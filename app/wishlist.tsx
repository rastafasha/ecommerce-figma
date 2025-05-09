import { BottomBar } from '@/components/BottomBar';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const recentlyViewed = [
  { id: '1', image: require('../assets/images/products/1.png') },
  { id: '2', image: require('../assets/images/products/2.png') },
  { id: '3', image: require('../assets/images/products/3.png') },
  { id: '4', image: require('../assets/images/products/4.png') },
  { id: '5', image: require('../assets/images/products/1.png') },
];

const wishlistItems = [
  {
    id: '1',
    image: require('../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
    discountedPrice: null,
    color: 'Pink',
    size: 'M',
  },
  {
    id: '2',
    image: require('../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
    discountedPrice: 12.0,
    color: 'Pink',
    size: 'M',
  },
  {
    id: '3',
    image: require('../assets/images/products/3.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 27.0,
    discountedPrice: null,
    color: 'Pink',
    size: 'M',
  },
  {
    id: '4',
    image: require('../assets/images/products/4.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 19.0,
    discountedPrice: null,
    color: 'Pink',
    size: 'M',
  },
];

const { width } = Dimensions.get('window');

const Wishlist = () => {
  const renderRecentlyViewedItem = ({ item }: { item: any }) => (
    <View style={styles.recentlyViewedItem}>
      <Image source={item.image} style={styles.recentlyViewedImage} />
    </View>
  );

  const renderWishlistItem = ({ item }: { item: any }) => (
    <View style={styles.wishlistItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceContainer}>
          {item.discountedPrice ? (
            <>
              <Text style={styles.originalPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.discountedPrice}>${item.discountedPrice.toFixed(2)}</Text>
            </>
          ) : (
            <Text style={styles.discountedPrice}>${item.price.toFixed(2)}</Text>
          )}
        </View>
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.color}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.cartButton}>
        <Ionicons name="cart-outline" size={28} color="#0066FF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Wishlist</Text>
      <View style={styles.recentlyViewedContainer}>
        <Text style={styles.sectionTitle}>Recently viewed</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward-circle" size={28} color="#0066FF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentlyViewed}
        renderItem={renderRecentlyViewedItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recentlyViewedList}
      />
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.wishlistList}
      />
      <BottomBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recentlyViewedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentlyViewedList: {
    marginBottom: 24,
  },
  recentlyViewedItem: {
    marginRight: 12,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  recentlyViewedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  wishlistList: {
    flexGrow: 0,
  },
  wishlistItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginRight: 12,
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF3366',
    borderRadius: 20,
    padding: 4,
  },
  detailsContainer: {
    flex: 1,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#D6D9E6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 8,
  },
  tagText: {
    fontSize: 14,
    color: '#000',
  },
  cartButton: {
    padding: 8,
  },
});

export default Wishlist;
