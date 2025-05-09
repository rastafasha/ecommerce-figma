// BottomBar.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../app/routes';

export const BottomBar = () => {
  const router = useRouter();

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.HOME)}
      >
        <Ionicons name="home-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.WISHLIST)}
      >
        <Ionicons name="heart-outline" size={24} color="#0066FF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.DOCUMENTS)}
      >
        <Ionicons name="document-text-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.CART)}
      >
        <Ionicons name="cart-outline" size={24} color="#0066FF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => router.push(ROUTES.PROFILE)}
      >
        <Ionicons name="person-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BottomBar;
