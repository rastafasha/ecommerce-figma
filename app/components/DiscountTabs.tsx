import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface DiscountTabsProps {
  selectedDiscount: string;
  onSelectDiscount: (discount: string) => void;
}

const discountOptions = ['All', '10%', '20%', '30%', '40%', '50%'];

export const DiscountTabs: React.FC<DiscountTabsProps> = ({ selectedDiscount, onSelectDiscount }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}
      >
        {discountOptions.map((discount) => {
          const isSelected = selectedDiscount === discount;
          return (
            <TouchableOpacity
              key={discount}
              style={[styles.tab, isSelected && styles.selectedTab]}
              onPress={() => onSelectDiscount(discount)}
            >
              <Text style={[styles.tabText, isSelected && styles.selectedTabText]}>
                {discount}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedTab: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
