import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = 100;

const bigSaleImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

const mostPopularData = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80',
    label: 'New',
    likes: 1780,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80',
    label: 'Sale',
    likes: 1780,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=100&q=80',
    label: 'Hot',
    likes: 1780,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80',
    label: 'New',
    likes: 1780,
  },
];

const newArrivalsData = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=200&q=80',
    description: 'New Arrival 1',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=200&q=80',
    description: 'New Arrival 2',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=200&q=80',
    description: 'New Arrival 3',
  },
];

const SaleSections = () => {
  const renderMostPopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={{ uri: item.image }} style={styles.popularImage} />
      <View style={styles.popularLabelContainer}>
        <Text style={styles.popularLabel}>{item.label}</Text>
      </View>
      <View style={styles.likesContainer}>
        <Ionicons name="heart" size={14} color="#0066FF" />
        <Text style={styles.likesText}>{item.likes}</Text>
      </View>
    </View>
  );

  const renderNewArrivalItem = ({ item }) => (
    <View style={styles.newArrivalItem}>
      <Image source={{ uri: item.image }} style={styles.newArrivalImage} />
      <Text style={styles.newArrivalDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Big Sale Banner */}
      <View style={styles.bigSaleContainer}>
        <View style={styles.bigSaleTextContainer}>
          <Text style={styles.bigSaleTitle}>Big Sale</Text>
          <Text style={styles.bigSaleSubtitle}>Up to 50%</Text>
          <TouchableOpacity style={styles.bigSaleButton}>
            <Text style={styles.bigSaleButtonText}>Happening Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={{ uri: bigSaleImage }} style={styles.bigSaleImage} />
      </View>

      {/* Most Popular Section */}
      <View style={styles.mostPopularContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Most Popular</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mostPopularData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderMostPopularItem}
          contentContainerStyle={styles.popularList}
        />
      </View>

      {/* New Arrivals Section */}
      <View style={styles.newArrivalsContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={newArrivalsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderNewArrivalItem}
          contentContainerStyle={styles.newArrivalsList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  bigSaleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F9C74F',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  bigSaleTextContainer: {
    flex: 1,
  },
  bigSaleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  bigSaleSubtitle: {
    fontSize: 16,
    marginVertical: 8,
    color: '#000',
  },
  bigSaleButton: {
    backgroundColor: '#0066FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  bigSaleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bigSaleImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginLeft: 16,
  },
  mostPopularContainer: {
    marginBottom: 24,
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
  seeAllText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  popularList: {
    paddingLeft: 4,
  },
  popularItem: {
    width: CARD_WIDTH,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  popularImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 12,
  },
  popularLabelContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  popularLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  likesText: {
    marginLeft: 4,
    color: '#0066FF',
    fontWeight: 'bold',
  },
  newArrivalsContainer: {
    marginBottom: 24,
  },
  newArrivalsList: {
    paddingLeft: 4,
  },
  newArrivalItem: {
    width: CARD_WIDTH,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  newArrivalImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 12,
  },
  newArrivalDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SaleSections;
