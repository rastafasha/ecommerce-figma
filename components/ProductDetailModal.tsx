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

const { width, height } = Dimensions.get('window');

interface Variation {
  id: string;
  label: string;
}

interface SpecificationTag {
  id: string;
  label: string;
  type?: 'pink' | 'blue';
}

interface DeliveryOption {
  id: string;
  name: string;
  days: string;
  price: string;
}

interface Review {
  id: string;
  userName: string;
  userImage: any;
  rating: number;
  text: string;
}

interface Product {
  id: string;
  image: any;
  images: any;
  price: string;
  description: string;
  variations: Variation[];
  specifications: {
    material: SpecificationTag[];
    origin: SpecificationTag[];
  };
  deliveryOptions: DeliveryOption[];
  rating: number;
  reviews: Review[];
  mostPopular: Product[];
  youMightLike: Product[];
}

interface ProductDetailModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  visible,
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
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

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: height * 0.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
  },
  dragIndicator: {
    width: 60,
    height: 5,
    backgroundColor: '#0066FF',
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
  productImage: {
    width: width,
    height: 300,
  },
  imageCarousel: {
    width: width,
    height: 300,
  },
  priceShareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionText: {
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  variationTagsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  variationTag: {
    backgroundColor: '#FCE9E9',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
  },
  variationTagText: {
    color: '#000',
  },
  variationImagesContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  variationImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  specificationTagsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
    flexWrap: 'wrap',
  },
  specificationTag: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  pinkTag: {
    backgroundColor: '#FCE9E9',
  },
  blueTag: {
    backgroundColor: '#E6F0FF',
  },
  specificationTagText: {
    color: '#000',
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sizeGuideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sizeGuideText: {
    color: '#0066FF',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
  },
  deliveryOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  deliveryOptionName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  deliveryOptionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryDays: {
    backgroundColor: '#E6F0FF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
  },
  deliveryDaysText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  deliveryPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  ratingScore: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  reviewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  reviewUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1,
  },
  reviewUserName: {
    fontWeight: 'bold',
  },
  reviewText: {
    color: '#666',
  },
  viewAllReviewsButton: {
    backgroundColor: '#0066FF',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewAllReviewsText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 10,
  },
  popularScroll: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  popularItem: {
    marginRight: 10,
    width: 100,
  },
  popularImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  popularText: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 4,
  },
  youMightLikeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  youMightLikeItem: {
    width: (width - 60) / 2,
    marginBottom: 20,
  },
  youMightLikeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  youMightLikeDescription: {
    paddingTop: 6,
    fontSize: 14,
  },
  youMightLikePrice: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 4,
  },
  bottomBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  favoriteButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#0066FF',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
});

export default ProductDetailModal;
