import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import discountFilterStyles from './styles/discountFilterStyle';

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

const styles = StyleSheet.create(discountFilterStyles);
