import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomBar from '../components/BottomBar';
import SettingsModal from '../components/SettingsModal';
import profileStyles from './styles/profileStyles';
const recentlyViewed = [
  { id: '1', image: require('../assets/images/products/1.png') },
  { id: '2', image: require('../assets/images/products/2.png') },
  { id: '3', image: require('../assets/images/products/3.png') },
  { id: '4', image: require('../assets/images/products/4.png') },
  { id: '5', image: require('../assets/images/products/1.png') },
];

const ordersTabs = ['To Pay', 'To Receive', 'To Review'];

const stories = [
  { id: '1', image: require('../assets/images/products/1.png') },
  { id: '2', image: require('../assets/images/products/2.png') },
  { id: '3', image: require('../assets/images/products/3.png') },
  { id: '4', image: require('../assets/images/products/4.png') },
];

const newItems = [
  {
    id: '1',
    image: require('../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
  },
  {
    id: '2',
    image: require('../assets/images/products/3.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 32.0,
  },
  {
    id: '3',
    image: require('../assets/images/products/4.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 21.0,
  },
];

const mostPopular = [
  {
    id: '1',
    image: require('../assets/images/products/1.png'),
    likes: 1780,
    isNew: true,
    isSale: false,
    isHot: false,
  },
  {
    id: '2',
    image: require('../assets/images/products/2.png'),
    likes: 1780,
    isNew: false,
    isSale: true,
    isHot: false,
  },
  {
    id: '3',
    image: require('../assets/images/products/3.png'),
    likes: 1780,
    isNew: false,
    isSale: false,
    isHot: true,
  },
];

const categories = [
  { id: '1', name: 'Clothing', count: 109, image: require('../assets/images/products/1.png') },
  { id: '2', name: 'Shoes', count: 530, image: require('../assets/images/products/2.png') },
  { id: '3', name: 'Bags', count: 87, image: require('../assets/images/products/3.png') },
  { id: '4', name: 'Lingerie', count: 218, image: require('../assets/images/products/4.png') },
];

const flashSaleItems = [
  { id: '1', image: require('../assets/images/products/1.png'), discount: 20 },
  { id: '2', image: require('../assets/images/products/2.png'), discount: 20 },
  { id: '3', image: require('../assets/images/products/3.png'), discount: 20 },
  { id: '4', image: require('../assets/images/products/4.png'), discount: 20 },
  { id: '5', image: require('../assets/images/products/2.png'), discount: 20 },
  { id: '6', image: require('../assets/images/products/3.png'), discount: 20 },
];

const topProducts = [
  { id: '1', image: require('../assets/images/products/1.png') },
  { id: '2', image: require('../assets/images/products/2.png') },
  { id: '3', image: require('../assets/images/products/3.png') },
  { id: '4', image: require('../assets/images/products/4.png') },
];

const justForYou = [
  {
    id: '1',
    image: require('../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
  },
  {
    id: '2',
    image: require('../assets/images/products/3.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
  },
  {
    id: '3',
    image: require('../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
  },
  {
    id: '4',
    image: require('../assets/images/products/4.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
  },
];

const { width } = Dimensions.get('window');

const Profile = () => {
  const router = useRouter();
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const renderRecentlyViewedItem = ({ item }: { item: any }) => (
    <View style={styles.recentlyViewedItem}>
      <Image source={item.image} style={styles.recentlyViewedImage} />
    </View>
  );

  const renderStoriesItem = ({ item }: { item: any }) => (
    <View style={styles.storyItem}>
      <Image source={item.image} style={styles.storyImage} />
    </View>
  );

  const renderNewItem = ({ item }: { item: any }) => (
    <View style={styles.newItem}>
      <Image source={item.image} style={styles.newItemImage} />
      <Text style={styles.newItemDescription}>{item.description}</Text>
      <Text style={styles.newItemPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  const renderMostPopularItem = ({ item }: { item: any }) => (
    <View style={styles.mostPopularItem}>
      <Image source={item.image} style={styles.mostPopularImage} />
      <View style={styles.mostPopularInfo}>
        <Text style={styles.likes}>{item.likes}0</Text>
        {item.isNew && <Text style={styles.tagNew}>New</Text>}
        {item.isSale && <Text style={styles.tagSale}>Sale</Text>}
        {item.isHot && <Text style={styles.tagHot}>Hot</Text>}
      </View>
    </View>
  );

  const renderCategoryItem = ({ item }: { item: any }) => (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryCount}>{item.count}</Text>
    </View>
  );

  const renderFlashSaleItem = ({ item }: { item: any }) => (
    <View style={styles.flashSaleItem}>
      <Image source={item.image} style={styles.flashSaleImage} />
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>-{item.discount}%</Text>
      </View>
    </View>
  );

  const renderTopProductItem = ({ item }: { item: any }) => (
    <View style={styles.topProductItem}>
      <Image source={item.image} style={styles.topProductImage} />
    </View>
  );

  const renderJustForYouItem = ({ item }: { item: any }) => (
    <View style={styles.justForYouItem}>
      <Image source={item.image} style={styles.justForYouImage} />
      <Text style={styles.justForYouDescription}>{item.description}</Text>
      <Text style={styles.justForYouPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                  <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <View style={styles.itemCountBadge}>
                </View>
              </View>
      <ScrollView style={[styles.container, { paddingBottom: 80 }]}>
        
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileImageContainer}>
            <Image
              source={require('../assets/images/profile/profile.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.activityButton}>
            
            <Text style={styles.activityButtonText}>My Activity</Text>
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="remove-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="list-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setSettingsModalVisible(true)}
            >
              <Ionicons name="settings-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Greeting */}
        <Text style={styles.greeting}>Hello, Romina!</Text>
        {/* Announcement */}
        <View style={styles.announcement}>
          <Text style={styles.announcementText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit luctus libero ac vulputate.
          </Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={28} color="#0066FF" />
          </TouchableOpacity>
        </View>
        {/* Recently Viewed */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recently viewed</Text>
          <FlatList
            data={recentlyViewed}
            renderItem={renderRecentlyViewedItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.recentlyViewedList}
          />
        </View>
        {/* My Orders */}
        <View style={styles.ordersContainer}>
          {ordersTabs.map((tab) => (
            <TouchableOpacity key={tab} style={styles.orderTab}>
              <Text style={styles.orderTabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Stories */}
        <View style={styles.storiesContainer}>
          <FlatList
            data={stories}
            renderItem={renderStoriesItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storiesList}
          />
        </View>
        {/* New Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Items</Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={28} color="#0066FF" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={newItems}
          renderItem={renderNewItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.newItemsList}
        />
        {/* Most Popular */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Most Popular</Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={28} color="#0066FF" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={mostPopular}
          renderItem={renderMostPopularItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.mostPopularList}
        />
        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={28} color="#0066FF" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          style={styles.storiesList}
        />
        {/* Flash Sale */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Flash Sale</Text>
          <View style={styles.timerContainer}>
            <Ionicons name="timer-outline" size={24} color="#000" />
            <Text style={styles.timerText}>00 36 58</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={28} color="#0066FF" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={flashSaleItems}
          renderItem={renderFlashSaleItem}
          keyExtractor={(item) => item.id}
          numColumns={4}
          style={styles.flashSaleList}
        />
        {/* Top Products */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Products</Text>
          <FlatList
            data={topProducts}
            renderItem={renderTopProductItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.topProductsList}
          />
        </View>
        {/* Just For You */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Just For You</Text>
          <FlatList
            data={justForYou}
            renderItem={renderJustForYouItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            style={styles.justForYouList}
          />
        </View>
      </ScrollView>
      <BottomBar />
      <SettingsModal
        visible={settingsModalVisible}
        onClose={() => setSettingsModalVisible(false)}
      />
    </View>
  );
};
const styles = StyleSheet.create(profileStyles);

export default Profile;
