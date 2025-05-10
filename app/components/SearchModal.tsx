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
import searchModalStyles from './styles/searchModalStyles';

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
    image: require('../../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$125,00',
  },
  {
    id: '2',
    image: require('../../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$32,00',
  },
  {
    id: '3',
    image: require('../../assets/images/products/3.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$21,00',
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ visible, onClose }) => {
  
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

const styles = StyleSheet.create(searchModalStyles);

