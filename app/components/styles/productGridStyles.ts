

import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

const productGridStyles = StyleSheet.create({
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


export default productGridStyles;
