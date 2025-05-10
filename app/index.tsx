// Index.tsx

import { CartModal } from './components/CartModal';
import { DiscountTabs } from './components/DiscountTabs';
import { FilterModal } from './components/FilterModal';
import { SaleSections } from './components/SaleSections';

import { products20Percent, shoeProducts } from '@/app/mock/products';
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
import { Header } from './components/Header';
import { NavigationBar } from './components/NavegationBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductGrid } from './components/ProductGrid';
import { SearchModal } from './components/SearchModal';
import { TimerDisplay } from './components/TimerDisplay';
import { FilterState, Product } from './interface/Interface';
import { categoryOptions, colorOptions, sizeOptions, sortOptions } from './mock/Options';
import indexStyles from './styles/indexStyles';


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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // New state for search modal
  const [searchVisible, setSearchVisible] = useState(false);

  // New state for cart modal
  const [cartVisible, setCartVisible] = useState(false);

  const [activeTab, setActiveTab] = useState('Wishlist');
  
  const [selectedDiscount, setSelectedDiscount] = useState('20%');

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };

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
    <SafeAreaView style={{ flex: 1 }} >
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
        <DiscountTabs 
          selectedDiscount={selectedDiscount} 
          onSelectDiscount={setSelectedDiscount} 
        />

        {/* Section title with sort/filter */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>{selectedDiscount} Discount </Text>
          <TouchableOpacity onPress={openFilterDrawer}>
            <Ionicons name="options-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Product grid */}
        <ProductGrid 
          navigation={navigation} 
          products={selectedDiscount === 'All' ? [...products20Percent, ...shoeProducts] : products20Percent.filter(p => p.discount === selectedDiscount)} 
          toggleFavorite={(productId: string) => {
            // Implement the toggleFavorite logic here
            console.log(`Toggled favorite for product: ${productId}`);
          }}
          onSelectProduct={(product) => {
            setSelectedProduct(product);
            setProductDetailVisible(true);
          }}
        />

        {/* Shoes product grid */}
        <ProductGrid
          navigation={navigation}
          products={shoeProducts}
          toggleFavorite={(productId: string) => {
            console.log(`Toggled favorite for product: ${productId}`);
          }}
          onSelectProduct={(product) => {
            setSelectedProduct(product);
            setProductDetailVisible(true);
          }}
        />

        {/* Sale sections */}
        <SaleSections />

      </ScrollView>

      {/* Menu footer Sticky bottom filter/sort */}
      <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />

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

const styles = StyleSheet.create(indexStyles);

export default Index;
