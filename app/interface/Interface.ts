import { Product } from "../models/Product";


export interface Variation {
    id: string;
    label: string;
  }
  
  export interface SpecificationTag {
    id: string;
    label: string;
    type?: 'pink' | 'blue';
  }
  
  export interface DeliveryOption {
    id: string;
    name: string;
    days: string;
    price: string;
  }
  
  export interface Review {
    id: string;
    userName: string;
    userImage: any;
    rating: number;
    text: string;
  }
  
  export interface DetailedProduct  {
    images: any[];
    price: string;
    description: string;
    variations: Variation[];
    specifications: {
      material: SpecificationTag[];
      origin: SpecificationTag[];
    };
    deliveryOptions: DeliveryOption[];
    reviews: Review[];
    mostPopular: Product[];
    youMightLike: Product[];
  }
  
  // Define filter state
  export interface FilterState {
    categories: string[];
    sizes: string[];
    colors: string[];
    priceRange: [number, number];
    sortBy: string;
  }
