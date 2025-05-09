import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const DiscountFilter = () => {
  const [selectedDiscount, setSelectedDiscount] = useState('20%');
  const discountOptions = ['10%', '20%', '30%', '40%', '50%'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.discountFilterContainer}
    >
      {discountOptions.map((discount) => (
        <TouchableOpacity
          key={discount}
          style={[
            styles.discountOption,
            selectedDiscount === discount && styles.selectedDiscountOption,
          ]}
          onPress={() => setSelectedDiscount(discount)}
        >
          <Text
            style={[
              styles.discountText,
              selectedDiscount === discount && styles.selectedDiscountText,
            ]}
          >
            {discount}
          </Text>
        </TouchableOpacity>
      ))}
      
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
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

export default DiscountFilter;
