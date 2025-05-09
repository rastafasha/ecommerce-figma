export interface Product {
    id: string;
    image: any;
    title: string;
    discountedPrice: number;
    originalPrice: number;
    discount: string;
    rating: number;
    isFavorite: boolean;
    category: string;
  }
  
  // Define filter state
  export interface FilterState {
    categories: string[];
    sizes: string[];
    colors: string[];
    priceRange: [number, number];
    sortBy: string;
  }