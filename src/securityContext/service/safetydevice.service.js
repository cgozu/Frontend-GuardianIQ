import axios from 'axios';

export async function fetchSafetyDevices() {
    try {
        const response = await axios.get('http://localhost:3000/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
