import { CartItem, WishlistItem } from "@/app/interface/cartInterfase";
export const sampleCartItems: CartItem[] = [
  {
    id: '1',
    image: require('../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    color: 'Pink',
    size: 'M',
    price: 17.0,
    quantity: 1,
  },
  {
    id: '2',
    image: require('../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    color: 'Pink',
    size: 'M',
    price: 17.0,
    quantity: 1,
  },
];

export const sampleWishlistItems: WishlistItem[] = [
  {
    id: '1',
    image: require('../assets/images/products/3.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
    color: 'Pink',
    size: 'M',
  },
  {
    id: '2',
    image: require('../assets/images/products/4.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 17.0,
    color: 'Pink',
    size: 'M',
  },
];
