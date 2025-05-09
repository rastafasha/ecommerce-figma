import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');


const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImageContainer: {
    marginRight: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  itemCountBadge: {
    backgroundColor: '#E6F0FF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
  },
  itemCountText: {
    color: '#0066FF',
    fontWeight: 'bold',
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

export default profileStyles;
