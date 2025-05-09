import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  
}

const sampleSearchHistory = ['Socks', 'Red Dress', 'Sunglasses', 'Mustard Pants', '80-s Skirt'];
const sampleRecommendations = ['Skirt', 'Accessories', 'Black T-Shirt', 'Jeans', 'White Shoes'];
const sampleDiscover = [
  {
    id: '1',
    image: require('../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$125,00',
  },
  {
    id: '2',
    image: require('../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$32,00',
  },
  {
    id: '3',
    image: require('../assets/images/products/3.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$21,00',
  },
];

const SearchModal: React.FC<SearchModalProps> = ({ visible, onClose }) => {
  
  const router = useRouter();
  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
                      <Ionicons name="close" size={24} color="#000" />
                    </TouchableOpacity>
            <Text style={styles.headerTitle}>Search</Text>
            <TouchableOpacity>
              <Ionicons name="camera-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Search input */}
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              // Add onChangeText and value props as needed
            />
            <TouchableOpacity>
              <Ionicons name="search-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {/* Search history */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Search history</Text>
                <TouchableOpacity>
                  <Ionicons name="trash-outline" size={20} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={styles.tagsContainer}>
                {sampleSearchHistory.map((item) => (
                  <View key={item} style={styles.tag}>
                    <Text>{item}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Recommendations */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recommendations</Text>
              <View style={styles.tagsContainer}>
                {sampleRecommendations.map((item) => (
                  <View key={item} style={styles.tag}>
                    <Text>{item}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Discover */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Discover</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {sampleDiscover.map((item) => (
                  <View key={item.id} style={styles.discoverCard}>
                    <Image source={item.image} style={styles.discoverImage} />
                    <Text style={styles.discoverDescription}>{item.description}</Text>
                    <Text style={styles.discoverPrice}>{item.price}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    paddingRight: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#F0F3FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  discoverCard: {
    width: width * 0.4,
    marginRight: 15,
  },
  discoverImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  discoverDescription: {
    marginTop: 6,
    fontSize: 14,
  },
  discoverPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchModal;
