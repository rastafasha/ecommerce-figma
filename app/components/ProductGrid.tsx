import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Product } from '../models/Product';
import productGridStyles from './styles/productGridStyles';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

interface ProductGridProps {
  navigation: any;
  products: Product[];
  toggleFavorite: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, navigation, toggleFavorite, onSelectProduct }) => {

  return (
    <View style={styles.productGrid}>
      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <TouchableOpacity 
            style={styles.productImageContainer}
            onPress={() => onSelectProduct(product)}
          >
            <Image 
              source={product.img} 
              style={styles.productImage} 
              resizeMode="cover"
            />
            <View style={styles.discountTag}>
              <Text style={styles.discountTagText}>{product.discount}</Text>
            </View>
            <TouchableOpacity 
              style={styles.favoriteButton}
              onPress={() => toggleFavorite(product.id)}
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
              {product.titulo}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPrice}>${product.precio_ahora.toFixed(2)}</Text>
              <Text style={styles.originalPrice}>${product.precio_antes.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create(productGridStyles);
