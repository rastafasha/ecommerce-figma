import AsyncStorage from '@react-native-async-storage/async-storage';
import { environment } from '../environment';
import { Product } from '../models/Product';

class ProductoService {
  private baseUrl = environment.baseUrl;

  private async getToken(): Promise<string> {
    return (await AsyncStorage.getItem('token')) || '';
  }

  private async getHeaders() {
    const token = await this.getToken();
    return {
      'Content-Type': 'application/json',
      'x-token': token
    };
  }

  async getProductos(): Promise<Product[]> {
    const url = `${this.baseUrl}/productos`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    
    return data.products;
  }

  async getProductsActivos(): Promise<Product[]> {
    const url = `${this.baseUrl}/productos/activos`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.productos;
  }

  async getProductosDestacados(): Promise<Product[]> {
    const url = `${this.baseUrl}/productos/destacados`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.productos;
  }

  async getProductoById(_id: string): Promise<Product> {
    const url = `${this.baseUrl}/productos/${_id}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.producto;
  }

  async listar_newest(): Promise<Product[]> {
    const url = `${this.baseUrl}/productos/productos_nuevos/show_producto`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.productos;
  }

  async findProducto_by_Categorynombre(nombre: string): Promise<any> {
    const url = `${this.baseUrl}/productos/producto_by_categorynombre/nombre/${nombre}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async listar_productoCat(_id: string): Promise<Product[]> {
    const url = `${this.baseUrl}/productos/productos_general/cat/${_id}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.productos;
  }

  async find_by_slug(slug: string): Promise<Product> {
    const url = `${this.baseUrl}/productos/producto_by_slug/${slug}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.producto;
  }

  async find_by_branding(marca: string): Promise<Product[]> {
    const url = `${this.baseUrl}/productos/producto_by_branding/${marca}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.productos;
  }

  async find_by_storeId(tienda: string): Promise<Product[]> {
    const url = `${this.baseUrl}/productos/producto_by_tiendaId/${tienda}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.productos;
  }

  async reducir_stock(id: string, cantidad: number): Promise<Product> {
    const url = `${this.baseUrl}/productos/productos_stock/reducir/${id}/${cantidad}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.producto_data;
  }

  async aumentar_stock(id: string, cantidad: number): Promise<Product> {
    const url = `${this.baseUrl}/productos/productos_stock/aumentar/${id}/${cantidad}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.producto_data;
  }

  async aumentar_ventas(id: string): Promise<Product> {
    const url = `${this.baseUrl}/productos/productos_ventas/aumentar/${id}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.producto_data;
  }

  async listar_autocomplete(): Promise<any> {
    const url = `${this.baseUrl}/productos/producto_cliente_autocomplete`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
  }

  async getProductoByCategoryName(nombre: string): Promise<Product[]> {
    const url = `${this.baseUrl}/productos/producto_by_categorynombre/${nombre}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.productos;
  }

  async search(query: string = ''): Promise<any> {
    const url = `${this.baseUrl}/productos/search?buscar=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

export default new ProductoService();
