import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import saleSelectionStyles from './styles/saleSelectionStyles';



const bigSaleImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

// Define the type for most popular items
type MostPopularItem = {
  id: string;
  image: string;
  label: string;
  likes: number;
};

const mostPopularData: MostPopularItem[] = [
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

export const SaleSections = () => {
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

const styles = StyleSheet.create(saleSelectionStyles);

