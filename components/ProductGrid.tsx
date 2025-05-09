import { Product } from '@/interface/Interface';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

// Toggle favorite status

  
  
  interface ProductGridProps {
    navigation: any;
    products: Product[];
    toggleFavorite: (productId: string) => void;
    onSelectProduct: (product: any) => void; // Added onSelectProduct property
  }
  

export const ProductGrid: React.FC<ProductGridProps> = ({ products, navigation, toggleFavorite, onSelectProduct }) => {

  const [productsState, setProducts] = useState<Product[]>([
      {
        id: '1',
        image: require('../assets/images/products/1.png'),
        title: 'OPPOF19 Perfume Collection',
        discountedPrice: 16.00,
        originalPrice: 20.00,
        discount: '20%',
        rating: 4.5,
        isFavorite: false,
        category: 'Dresses',
      },
      {
        id: '2',
        image: require('../assets/images/products/1.png'),
        title: 'Hyaluronic Acid Serum',
        discountedPrice: 16.00,
        originalPrice: 20.00,
        discount: '20%',
        rating: 4.2,
        isFavorite: false,
        category: 'Shirts',
      },
      {
        id: '3',
        image: require('../assets/images/products/1.png'),
        title: 'Women\'s Solid Casual Dress',
        discountedPrice: 16.00,
        originalPrice: 20.00,
        discount: '20%',
        rating: 4.7,
        isFavorite: true,
        category: 'Dresses',
      },
      {
        id: '4',
        image: require('../assets/images/products/1.png'),
        title: 'Women\'s Stylish Footwear',
        discountedPrice: 16.00,
        originalPrice: 20.00,
        discount: '20%',
        rating: 4.0,
        isFavorite: false,
        category: 'Shoes',
      },
    ]);

  // Toggle favorite status
  const handleToggleFavorite = (productId: string) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, isFavorite: !product.isFavorite } 
          : product
      )
    );
  };
  
  return (
    <View style={styles.productGrid}>
      {productsState.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <TouchableOpacity 
            style={styles.productImageContainer}
            onPress={() => onSelectProduct(product)}
          >
            <Image 
              source={product.image} 
              style={styles.productImage} 
              resizeMode="cover"
            />
            <View style={styles.discountTag}>
              <Text style={styles.discountTagText}>{product.discount}</Text>
            </View>
            <TouchableOpacity 
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite(product.id)}
            >
              <Ionicons 
                name={product.isFavorite ? "heart" : "heart-outline"} 
                size={20} 
                color={product.isFavorite ? "#FF3366" : "#fff"} 
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSelectProduct(product)}
          >
            <Text style={styles.productTitle} numberOfLines={2}>
              {product.title}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPrice}>${product.discountedPrice.toFixed(2)}</Text>
              <Text style={styles.originalPrice}>${product.originalPrice.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  productCard: {
    width: CARD_WIDTH,
    marginBottom: 16,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  productImageContainer: {
    position: 'relative',
    height: CARD_WIDTH,
    borderRadius: 8,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  discountTag: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF3366',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountTagText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 14,
    marginTop: 8,
    marginHorizontal: 8,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
});

export default ProductGrid;
