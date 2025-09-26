import { environment } from '../environment';
import { DeliveryOption, Review, SpecificationTag, Variation } from '../interface/Interface';

export class Product {
  id!: string;
  titulo!: string;
  precio_ahora!: number;
  precio_antes!: number;
  discount!: string;
  img?: any;
  rating!: number;
  isFavorite!: boolean;
  category!: string;
  images!: any[];
  price!: number;
  description!: string;
  variations!: Variation[];
  specifications!: {
    material: SpecificationTag[];
    origin: SpecificationTag[];
  };
  deliveryOptions!: DeliveryOption[];
  reviews!: Review[];
  mostPopular!: Product[];
  youMightLike!: Product[];
  stock!: number;
  sku!: string;
  // Additional fields from Producto model
  video_review?: string;
  info_short?: string;
  detalle?: string;
  slug?: string;
  subcategoria?: string;
  isFeatured?: boolean;
  status?: boolean;
  marca?: string;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: string;
  

  constructor(id: string | undefined, name: string, description: string, category: string, price: number ){
    this._id = id;
    this.id = id || '';
    this.titulo = name;
    this.detalle = description;
    this.category = category;
    this.precio_ahora = price;
    this.precio_antes = price * 1.25;
    this.discount = '20%';
    this.rating = 4.0;
    this.isFavorite = false;
    this.images = [];
    this.price = price;
    this.description = description;
    this.variations = [];
    this.specifications = { material: [], origin: [] };
    this.deliveryOptions = [];
    this.reviews = [];
    this.mostPopular = [];
    this.youMightLike = [];
    this.stock = 0;
    this.sku = '';
    // this.img = imageUrl;
  }


  get imagenUrl(){

    if(!this.img){
      return `${environment.mediaUrlRemoto}/uploads/productos/no-image.jpg`;
    } else if(this.img.includes('https')){
      return this.img;
    } else if(this.img){
      return `${environment.mediaUrlRemoto}/uploads/productos/${this.img}`;
    }else {
      return `${environment.mediaUrlRemoto}/uploads/productos/no-image.jpg`;
    }

  }
}
