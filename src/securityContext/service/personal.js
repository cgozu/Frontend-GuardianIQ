
import axios from 'axios';

export async function fetchPersonals() {
    try {
        const response = await axios.get('https://my-json-server.typicode.com/rivacortez/personsafe/personalsafety');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
