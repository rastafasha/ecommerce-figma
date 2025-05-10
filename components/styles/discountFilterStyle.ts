
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const discountFilterStyles = StyleSheet.create({
  discountFilterContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  discountOption: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  selectedDiscountOption: {
    backgroundColor: '#007bff',
  },
  discountText: {
    color: '#333',
    fontWeight: 'bold',
  },
  selectedDiscountText: {
    color: '#fff',
  },
});


export default discountFilterStyles;
