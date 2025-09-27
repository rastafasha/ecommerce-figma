import AsyncStorage from '@react-native-async-storage/async-storage';
import { environment } from '../environment';
import { Marca } from '../models/marca';

class MarcaService {
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
   * Get all marcas
   */
  async getMarcas(): Promise<Marca[]> {
    const url = `${this.baseUrl}/marcas`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.marcas;
  }

  /**
   * Get marca by ID
   */
  async getMarcaById(_id: string): Promise<Marca> {
    const url = `${this.baseUrl}/marcas/${_id}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.marca;
  }

  /**
   * Create a new marca
   */
  async crearMarca(marca: { nombre: string; descripcion: string }): Promise<any> {
    const url = `${this.baseUrl}/marcas`;
    const headers = await this.getHeaders();
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(marca)
    });
    const data = await response.json();
    return data;
  }

  /**
   * Update an existing marca
   */
  async actualizarMarca(marca: Marca): Promise<any> {
    const url = `${this.baseUrl}/marcas/${marca._id}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(marca)
    });
    const data = await response.json();
    return data;
  }

  /**
   * Delete a marca by ID
   */
  async borrarMarca(_id: string): Promise<any> {
    const url = `${this.baseUrl}/marcas/${_id}`;
    const headers = await this.getHeaders();
    const response = await fetch(url, {
      method: 'DELETE',
      headers
    });
    const data = await response.json();
    return data;
  }
}

export default new MarcaService();
