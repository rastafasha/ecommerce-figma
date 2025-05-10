// FilterModal.tsx
import React from 'react';
import {
  Animated,
  Image,
  Modal,
  ScrollView,
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

