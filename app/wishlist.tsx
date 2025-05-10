import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationBar } from './components/NavegationBar';
import { recentlyViewed, wishlistItems } from './mock/wishlist';
import wishlistStyles from './styles/wishlistStyles';
const Wishlist = () => {
  
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Wishlist');

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderRecentlyViewedItem = ({ item }: { item: any }) => (
    <View style={styles.recentlyViewedItem}>
      <Image source={item.image} style={styles.recentlyViewedImage} />
    </View>
  );

  const renderWishlistItem = ({ item }: { item: any }) => (
    <View style={styles.wishlistItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceContainer}>
          {item.discountedPrice ? (
            <>
              <Text style={styles.originalPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.discountedPrice}>${item.discountedPrice.toFixed(2)}</Text>
            </>
          ) : (
            <Text style={styles.discountedPrice}>${item.price.toFixed(2)}</Text>
          )}
        </View>
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.color}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.cartButton}>
        <Ionicons name="cart-outline" size={28} color="#0066FF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
                    <View style={styles.header}>
                          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="#000" />
                          </TouchableOpacity>
                          <Text style={styles.headerTitle}>Wishlist</Text>
                          
                        </View>
      <View style={styles.recentlyViewedContainer}>
        <Text style={styles.sectionTitle}>Recently viewed</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward-circle" size={28} color="#0066FF" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.container}>
         <FlatList
        data={recentlyViewed}
        renderItem={renderRecentlyViewedItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recentlyViewedList}
      />
        <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.wishlistList}
      />
      </ScrollView>
      
      <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create(wishlistStyles);

export default Wishlist;
