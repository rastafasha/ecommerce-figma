// FilterModal.tsx
import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Category {
  id: string;
  name: string;
  image: any;
}

interface ColorOption {
  id: string;
  color: string;
  borderColor?: string;
}

interface SortOption {
  id: string;
  name: string;
}

interface Filters {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  sortBy: string;
}

interface FilterModalProps {
  filterVisible: boolean;
  closeFilterDrawer: () => void;
  drawerAnimation: Animated.Value;
  panResponder: any;
  categoryOptions: Category[];
  toggleCategory: (category: string) => void;
  filters: Filters;
  sizeOptions: string[];
  toggleSize: (size: string) => void;
  colorOptions: ColorOption[];
  toggleColor: (colorId: string) => void;
  sortOptions: SortOption[];
  setSortOption: (option: string) => void;
  clearFilters: () => void;
  applyFilters: () => void;
  styles: any;
}



const { width, height } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

export const FilterModal: React.FC<FilterModalProps> = ({
  filterVisible,
  closeFilterDrawer,
  drawerAnimation,
  panResponder,
  categoryOptions,
  toggleCategory,
  filters,
  sizeOptions,
  toggleSize,
  colorOptions,
  toggleColor,
  sortOptions,
  setSortOption,
  clearFilters,
  applyFilters,
  styles,
}) => {
  return (
    <Modal
      visible={filterVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={closeFilterDrawer}
    >
      <TouchableWithoutFeedback onPress={closeFilterDrawer}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.filterDrawer,
                {
                  transform: [{ translateY: drawerAnimation }],
                },
              ]}
              {...panResponder.panHandlers}
            >
              {/* Filter Header */}
              <View style={styles.filterHeader}>
                <Text style={styles.filterTitle}>Filter</Text>
                <TouchableOpacity onPress={closeFilterDrawer}>
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.filterContent}>
                {/* Categories */}
                <View style={styles.filterSection}>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesContainer}
                  >
                    {categoryOptions.map((category) => (
                      <TouchableOpacity
                        key={category.id}
                        style={styles.categoryItem}
                        onPress={() => toggleCategory(category.name)}
                      >
                        <View style={styles.categoryImageContainer}>
                          <Image source={category.image} style={styles.categoryImage} />
                          {filters.categories.includes(category.name) && (
                            <View style={styles.categoryCheckmark}>
                              <Ionicons name="checkmark" size={16} color="#fff" />
                            </View>
                          )}
                        </View>
                        <Text style={styles.categoryName}>{category.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                {/* Size */}
                <View style={styles.filterSection}>
                  <Text style={styles.filterSectionTitle}>Size</Text>
                  <View style={styles.filterTabs}>
                    <TouchableOpacity style={[styles.filterTab, styles.filterTabActive]}>
                      <Text style={styles.filterTabText}>Clothes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterTab}>
                      <Text style={styles.filterTabText}>Shoes</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.sizeOptions}>
                    {sizeOptions.map((size) => (
                      <TouchableOpacity
                        key={size}
                        style={[
                          styles.sizeOption,
                          filters.sizes.includes(size) && styles.sizeOptionActive,
                        ]}
                        onPress={() => toggleSize(size)}
                      >
                        <Text
                          style={[
                            styles.sizeOptionText,
                            filters.sizes.includes(size) && styles.sizeOptionTextActive,
                          ]}
                        >
                          {size}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                {/* Color */}
                <View style={styles.filterSection}>
                  <Text style={styles.filterSectionTitle}>Color</Text>
                  <View style={styles.colorOptions}>
                    {colorOptions.map((colorOption) => (
                      <TouchableOpacity
                        key={colorOption.id}
                        style={[
                          styles.colorOption,
                          { backgroundColor: colorOption.color },
                          colorOption.borderColor && { borderColor: colorOption.borderColor },
                        ]}
                        onPress={() => toggleColor(colorOption.id)}
                      >
                        {filters.colors.includes(colorOption.id) && (
                          <Ionicons
                            name="checkmark"
                            size={16}
                            color={colorOption.id === 'white' ? '#0066FF' : '#fff'}
                          />
                        )}
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                {/* Price */}
                <View style={styles.filterSection}>
                  <Text style={styles.filterSectionTitle}>Price</Text>
                  <View style={styles.priceRangeContainer}>
                    <Text style={styles.priceRangeText}>
                      ${filters.priceRange[0]} — ${filters.priceRange[1]}
                    </Text>
                    <View style={styles.priceSlider}>
                      <View style={styles.priceSliderTrack} />
                      <View style={styles.priceSliderFill} />
                      <View style={[styles.priceSliderThumb, { left: '10%' }]} />
                      <View style={[styles.priceSliderThumb, { left: '70%' }]} />
                    </View>
                  </View>
                </View>

                {/* Sort Options */}
                <View style={styles.filterSection}>
                  <View style={styles.sortOptions}>
                    {sortOptions.map((option, index) => (
                      <TouchableOpacity
                        key={option.id}
                        style={[
                          styles.sortOption,
                          filters.sortBy === option.name && styles.sortOptionActive,
                          index % 2 === 0 ? { marginRight: 10 } : {},
                        ]}
                        onPress={() => setSortOption(option.name)}
                      >
                        <Text
                          style={[
                            styles.sortOptionText,
                            filters.sortBy === option.name && styles.sortOptionTextActive,
                          ]}
                        >
                          {option.name}
                        </Text>
                        {filters.sortBy === option.name && (
                          <View style={styles.sortOptionCheckmark}>
                            <Ionicons name="checkmark" size={16} color="#fff" />
                          </View>
                        )}
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </ScrollView>

              {/* Filter Actions */}
              <View style={styles.filterActions}>
                <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
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

export default FilterModal;
