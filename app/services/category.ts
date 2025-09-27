import AsyncStorage from '@react-native-async-storage/async-storage';
import { environment } from '../environment';
import { Categoria } from '../models/categoria';

class CategoryService {
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

  /**
   * Get all categories
   */
  async getCategories(): Promise<Categoria[]> {
    const url = `${this.baseUrl}/categorias`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.categorias;
  }

  /**
   * Get active categories
   */
  async getCategoriesActivas(): Promise<Categoria[]> {
    const url = `${this.baseUrl}/categorias/cat/activas`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.categorias;
  }

  /**
   * Get category by ID
   */
  async getCategoriaById(_id: string): Promise<Categoria> {
    const url = `${this.baseUrl}/categorias/${_id}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.categoria;
  }

  /**
   * Find category by name
   */
  async find_by_nombre(nombre: string): Promise<Categoria> {
    const url = `${this.baseUrl}/categorias/category_by_nombre/nombre/${nombre}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.categoria;
  }

  /**
   * Get category by slug
   */
  async getCategoryBySlug(slug: string): Promise<Categoria> {
    const url = `${this.baseUrl}/categorias/by_slug/${slug}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.categoria;
  }
}

export default new CategoryService();
