// Index.tsx
import ProductGrid from '@/components/ProductGrid';
import { categoryOptions, colorOptions, sizeOptions, sortOptions } from '@/mock/Options';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from '../components/Header';
import { TimerDisplay } from '../components/TimerDisplay';
import { FilterState } from '../interface/Interface';

import BottomBar from '@/components/BottomBar';
import CartModal from '@/components/CartModal';
import FilterModal from '@/components/FilterModal';
import ProductDetailModal from '@/components/ProductDetailModal';
import SearchModal from '@/components/SearchModal';
// Define the navigation type
type RootStackParamList = {
  Home: undefined;
  FlashSale: undefined;
  ProductDetail: { productId: string };
  Cart: undefined;
  // Add other screens as needed
};

type IndexNavigationProp = StackNavigationProp<RootStackParamList, 'FlashSale'>;

type IndexProps = {
  navigation: IndexNavigationProp;
};


const { width, height } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

const Index: React.FC<IndexProps> = ({ navigation }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 36, seconds: 58 });
  const [filterVisible, setFilterVisible] = useState(false);

  // New state for product detail modal
  const [productDetailVisible, setProductDetailVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // New state for search modal
  const [searchVisible, setSearchVisible] = useState(false);

  // New state for cart modal
  const [cartVisible, setCartVisible] = useState(false);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    sizes: ['M'],
    colors: ['white'],
    priceRange: [10, 150],
    sortBy: 'Popular',
  });

  // Animation for the bottom drawer
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  
  // Pan responder for swipe down to close
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          drawerAnimation.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          closeFilterDrawer();
        } else {
          Animated.spring(drawerAnimation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  


  // Open filter drawer
  const openFilterDrawer = () => {
    setFilterVisible(true);
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Close filter drawer
  const closeFilterDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setFilterVisible(false);
    });
  };

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setFilters(prev => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories };
    });
  };

  // Toggle size selection
  const toggleSize = (size: string) => {
    setFilters(prev => {
      const sizes = prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes };
    });
  };

  // Toggle color selection
  const toggleColor = (color: string) => {
    setFilters(prev => {
      const colors = prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors };
    });
  };

  // Set sort option
  const setSortOption = (option: string) => {
    setFilters(prev => ({ ...prev, sortBy: option }));
  };

  // Apply filters
  const applyFilters = () => {
    // Here you would apply the filters to your products
    // For now, we'll just close the drawer
    closeFilterDrawer();
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({
      categories: [],
      sizes: [],
      colors: [],
      priceRange: [10, 150],
      sortBy: 'Popular',
    });
  };

 
  return (
    <SafeAreaView style={[styles.container, { paddingBottom: 80 }]}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <Header 
        navigation={navigation} 
        onSearchPress={() => setSearchVisible(true)} 
        onCartPress={() => setCartVisible(true)}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Blue curved background with timer */}
        <TimerDisplay timeLeft={timeLeft}></TimerDisplay>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Choose Your Discount</Text>

        {/* Discount filter */}
        

        {/* Section title with sort/filter */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>20% Discount </Text>
          <TouchableOpacity onPress={openFilterDrawer}>
            <Ionicons name="options-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Product grid */}
        <ProductGrid 
          navigation={navigation} 
          products={[]} // Replace with your actual products array
          toggleFavorite={(productId: string) => {
            // Implement the toggleFavorite logic here
            console.log(`Toggled favorite for product: ${productId}`);
          }}
          onSelectProduct={(product) => {
            setSelectedProduct(product);
            setProductDetailVisible(true);
          }}
        />

      </ScrollView>

      {/* Menu footer Sticky bottom filter/sort */}
      <BottomBar />

      {/* Filter Modal */}
      <FilterModal 
        filterVisible={filterVisible}
        closeFilterDrawer={closeFilterDrawer}
        drawerAnimation={drawerAnimation}
        panResponder={panResponder}
        filters={filters}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
        categoryOptions={categoryOptions}
        toggleCategory={toggleCategory}
        sizeOptions={sizeOptions}
        toggleSize={toggleSize}
        colorOptions={colorOptions}
        toggleColor={toggleColor}
        sortOptions={sortOptions}
        setSortOption={setSortOption}
        styles={styles} // Pass the styles prop
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        visible={productDetailVisible}
        product={selectedProduct}
        onClose={() => setProductDetailVisible(false)}
        onAddToCart={() => {
          // Add to cart logic here
          setProductDetailVisible(false);
        }}
        onBuyNow={() => {
          // Buy now logic here
          setProductDetailVisible(false);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
      />

      {/* Cart Modal */}
      <CartModal
        visible={cartVisible}
        onClose={() => setCartVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  curvedBackground: {
    height: 120,
    backgroundColor: '#0066FF',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: -40,
    paddingTop: 10,
    paddingRight: 20,
    alignItems: 'flex-end',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  timerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 50,
    marginLeft: 16,
    marginBottom: 10,
  },
  discountFilterContainer: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  discountOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: '#F5F5F5',
  },
  selectedDiscountOption: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#0066FF',
  },
  discountText: {
    fontSize: 16,
    color: '#666',
  },
  selectedDiscountText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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
    backgroundColor: '#f0f0f0', // Placeholder color while loading
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
  bottomBar: {
    position: 'absolute',
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
  },
  bottomBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  // Filter Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  filterDrawer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height * 0.85,
    paddingBottom: 20,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  filterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterContent: {
    flex: 1,
  },
  filterSection: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  filterSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  categoriesContainer: {
    paddingBottom: 8,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 60,
  },
  categoryImageContainer: {
    position: 'relative',
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 4,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  categoryCheckmark: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 102, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
  },
  filterTabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#FCE9E9',
  },
  filterTabActive: {
    backgroundColor: '#0066FF',
  },
  filterTabText: {
    color: '#000',
  },
  filterTabTextActive: {
    color: '#fff',
  },
  sizeOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 12,
    backgroundColor: '#F0F3FF',
  },
  sizeOptionActive: {
    backgroundColor: '#0066FF',
  },
  sizeOptionText: {
    fontSize: 14,
    color: '#D6D9E6',
  },
  sizeOptionTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  colorOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  priceRangeContainer: {
    marginTop: 8,
  },
  priceRangeText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 8,
  },
  priceSlider: {
    height: 30,
    position: 'relative',
    marginVertical: 10,
  },
  priceSliderTrack: {
    height: 4,
    backgroundColor: '#E6E9F2',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 13,
  },
  priceSliderFill: {
    height: 4,
    backgroundColor: '#0066FF',
    position: 'absolute',
    left: '10%',
    right: '30%',
    top: 13,
  },
  priceSliderThumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    borderWidth: 2,
    borderColor: '#0066FF',
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sortOption: {
    width: '48%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sortOptionActive: {
    backgroundColor: '#0066FF',
    borderColor: '#0066FF',
  },
  sortOptionText: {
    color: '#000',
  },
  sortOptionTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sortOptionCheckmark: {
    position: 'absolute',
    right: 8,
    top: '50%',
    marginTop: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  clearButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0066FF',
    marginRight: 10,
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 16,
    color: '#0066FF',
  },
  applyButton: {
    flex: 2,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#0066FF',
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Index;