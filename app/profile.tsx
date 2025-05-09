import React from 'react';
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
      

      <ScrollView style={[styles.container, { paddingBottom: 80 }]}>
        {/* Header */}
        
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
            <TouchableOpacity style={styles.iconButton}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImageContainer: {
    marginRight: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  activityButton: {
    backgroundColor: '#0066FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activityButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  iconButton: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  announcement: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  announcementText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  recentlyViewedList: {
    marginBottom: 24,
  },
  recentlyViewedItem: {
    marginRight: 12,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  recentlyViewedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  ordersContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  orderTab: {
    backgroundColor: '#E0F0FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  orderTabText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  storiesContainer: {
    marginBottom: 24,
  },
  storiesList: {},
  storyItem: {
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  storyImage: {
    width: 120,
    height: 180,
    borderRadius: 12,
  },
  newItemsList: {
    marginBottom: 24,
  },
  newItem: {
    marginRight: 12,
    width: 140,
  },
  newItemImage: {
    width: 140,
    height: 180,
    borderRadius: 12,
    marginBottom: 8,
  },
  newItemDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  newItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mostPopularList: {
    marginBottom: 24,
  },
  mostPopularItem: {
    marginRight: 12,
    width: 140,
  },
  mostPopularImage: {
    width: 140,
    height: 180,
    borderRadius: 12,
  },
  mostPopularInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  likes: {
    marginRight: 8,
  },
  tagNew: {
    backgroundColor: '#D6D9E6',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 4,
  },
  tagSale: {
    backgroundColor: '#FCE9E9',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 4,
  },
  tagHot: {
    backgroundColor: '#FCE9E9',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  categoryItem: {
    flex: 1,
    margin: 4,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryCount: {
    fontSize: 12,
    color: '#999',
  },
  flashSaleList: {
    marginBottom: 24,
  },
  flashSaleItem: {
    flex: 1,
    margin: 4,
    position: 'relative',
  },
  flashSaleImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF3366',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  topProductsList: {
    marginBottom: 24,
  },
  topProductItem: {
    marginRight: 12,
  },
  topProductImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  justForYouList: {
    marginBottom: 24,
  },
  justForYouItem: {
    flex: 1,
    margin: 4,
  },
  justForYouImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  justForYouDescription: {
    fontSize: 14,
    marginTop: 8,
  },
  justForYouPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
