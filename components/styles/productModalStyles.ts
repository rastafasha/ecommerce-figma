

import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const productModalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    height: height * 0.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 0,
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
    height: 90,
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
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 10,
    paddingTop:10
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



export default productModalStyles;
