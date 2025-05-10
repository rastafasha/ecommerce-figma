import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../routes';
interface NavigationBarProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab, onTabPress }) => {
  const router = useRouter();
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.HOME as any)}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={activeTab === 'Home' ? '#0066FF' : '#000'}
        />
        <Text style={[styles.label, activeTab === 'Home' && { color: '#0066FF' }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.WISHLIST as any)}
      >
        <Ionicons
          name="heart-outline"
          size={24}
          color={activeTab === 'Search' ? '#0066FF' : '#000'}
        />
        <Text style={[styles.label, activeTab === 'Search' && { color: '#0066FF' }]}>Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.PAYMENT as any)}
      >
        <Ionicons
          name="document-text-outline"
          size={24}
          color={activeTab === 'Cart' ? '#0066FF' : '#000'}
        />
        <Text style={[styles.label, activeTab === 'Cart' && { color: '#0066FF' }]}>Payment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.CART as any)}
      >
        <Ionicons
          name="cart-outline"
          size={24}
          color={activeTab === 'Profile' ? '#0066FF' : '#000'}
        />
        <Text style={[styles.label, activeTab === 'Profile' && { color: '#0066FF' }]}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.PROFILE as any)}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color={activeTab === 'Profile' ? '#0066FF' : '#000'}
        />
        <Text style={[styles.label, activeTab === 'Profile' && { color: '#0066FF' }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  bottomBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#000',
  },
});


