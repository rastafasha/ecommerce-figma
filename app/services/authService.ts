import { API_BASE_URL } from '../environment';

export async function sendToken(token: string): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error('Failed to send token');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending token:', error);
    throw error;
  }
}
