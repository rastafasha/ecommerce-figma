import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import productModalStyles from './styles/productModalStyles';

import { Product } from '../interface/Interface';

const { width, height } = Dimensions.get('window');

interface ProductDetailModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  visible,
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  return (
    <Modal visible={visible} animationType="slide"
     transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>

          {/* Header with close button */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Product Detail</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Drag indicator */}
          <View style={styles.dragIndicator} />

          {/* Image carousel */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.imageCarousel}
          >
          {(Array.isArray(product.images) ? product.images : [product.image, product.image, product.image, product.image]).slice(0,4).map((img: any, index: number) => (
              <Image
                key={index}
                source={img}
                style={styles.productImage}
                resizeMode="cover"
              />
            ))}
          </ScrollView>
          
          <ScrollView>

            {/* Price and share */}
            <View style={styles.priceShareContainer}>
              <Text style={styles.priceText}>${product.price}</Text>
              <TouchableOpacity>
                <Ionicons name="share-social-outline" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Description */}
            <Text style={styles.descriptionText}>{product.description}</Text>

            {/* Variations */}
            <Text style={styles.sectionTitle}>Variations</Text>
            <View style={styles.variationTagsContainer}>
            {Array.isArray(product.variations) && product.variations.map((variation) => (
              <View key={variation.id} style={styles.variationTag}>
                <Text style={styles.variationTagText}>{variation.label}</Text>
              </View>
            ))}
            </View>

            {/* Variation images horizontal scroll */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.variationImagesContainer}>
            {Array.isArray(product.variations) && product.variations.map((variation) => (
              <Image
                key={variation.id}
                source={product.image}
                style={styles.variationImage}
                resizeMode="cover"
              />
            ))}
            </ScrollView>

            {/* Specifications */}
            <Text style={styles.sectionTitle}>Specifications</Text>
            <Text style={styles.subSectionTitle}>Material</Text>
            <View style={styles.specificationTagsContainer}>
              {Array.isArray(product.specifications?.material) && product.specifications.material.map((tag) => (
                <View
                  key={tag.id}
                  style={[
                    styles.specificationTag,
                    tag.type === 'pink' ? styles.pinkTag : styles.blueTag,
                  ]}
                >
                  <Text style={styles.specificationTagText}>{tag.label}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.subSectionTitle}>Origin</Text>
            <View style={styles.specificationTagsContainer}>
              {Array.isArray(product.specifications?.origin) && product.specifications.origin.map((tag) => (
                <View
                  key={tag.id}
                  style={[
                    styles.specificationTag,
                    tag.type === 'blue' ? styles.blueTag : styles.pinkTag,
                  ]}
                >
                  <Text style={styles.specificationTagText}>{tag.label}</Text>
                </View>
              ))}
            </View>

            {/* Size guide */}
            <TouchableOpacity style={styles.sizeGuideContainer}>
              <Text style={styles.sizeGuideText}>Size guide</Text>
              <Ionicons name="arrow-forward" size={20} color="#0066FF" />
            </TouchableOpacity>

            {/* Delivery */}
            <Text style={styles.sectionTitle}>Delivery</Text>
            {Array.isArray(product.deliveryOptions) && product.deliveryOptions.map((option) => (
              <View key={option.id} style={styles.deliveryOption}>
                <Text style={styles.deliveryOptionName}>{option.name}</Text>
                <View style={styles.deliveryOptionDetails}>
                  <View style={styles.deliveryDays}>
                    <Text style={styles.deliveryDaysText}>{option.days}</Text>
                  </View>
                  <Text style={styles.deliveryPrice}>${option.price}</Text>
                </View>
              </View>
            ))}

            {/* Rating & Reviews */}
            <Text style={styles.sectionTitle}>Rating & Reviews</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.starsContainer}>
                {[...Array(5)].map((_, i) => (
                  <Ionicons
                    key={i}
                    name={i < Math.floor(product.rating) ? 'star' : 'star-outline'}
                    size={20}
                    color="#FFD700"
                  />
                ))}
              </View>
              <View style={styles.ratingScore}>
                <Text>{product.rating.toFixed(1)}/5</Text>
              </View>
            </View>

            {Array.isArray(product.reviews) && product.reviews.length > 0 && (
              <View style={styles.reviewContainer}>
                <Image source={product.reviews[0].userImage} style={styles.reviewUserImage} />
                <View style={styles.reviewTextContainer}>
                  <Text style={styles.reviewUserName}>{product.reviews[0].userName}</Text>
                  <View style={styles.starsContainer}>
                    {[...Array(5)].map((_, i) => (
                      <Ionicons
                        key={i}
                        name={i < Math.floor(product.reviews[0].rating) ? 'star' : 'star-outline'}
                        size={16}
                        color="#FFD700"
                      />
                    ))}
                  </View>
                  <Text style={styles.reviewText} numberOfLines={3}>
                    {product.reviews[0].text}
                  </Text>
                </View>
              </View>
            )}

            <TouchableOpacity style={styles.viewAllReviewsButton}>
              <Text style={styles.viewAllReviewsText}>View All Reviews</Text>
            </TouchableOpacity>

            {/* Most Popular */}
            <View style={styles.popularHeader}>
              <Text style={styles.sectionTitle}>Most Popular</Text>
              <TouchableOpacity>
                <Ionicons name="arrow-forward" size={20} color="#0066FF" />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
              {Array.isArray(product.mostPopular) && product.mostPopular.map((item) => (
                <View key={item.id} style={styles.popularItem}>
                  <Image source={item.image} style={styles.popularImage} />
                  <Text style={styles.popularText}>1780 ♥ New</Text>
                </View>
              ))}
            </ScrollView>

            {/* You Might Like */}
            <Text style={styles.sectionTitle}>You Might Like</Text>
            <View style={styles.youMightLikeContainer}>
              {Array.isArray(product.youMightLike) && product.youMightLike.map((item) => (
                <View key={item.id} style={styles.youMightLikeItem}>
                  <Image source={item.image} style={styles.youMightLikeImage} />
                  <Text style={styles.youMightLikeDescription}>Lorem ipsum dolor sit amet consectetur</Text>
                  <Text style={styles.youMightLikePrice}>${item.price}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Bottom action bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
            <Text style={styles.buyNowText}>Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create(productModalStyles);

