import axios from 'axios';

export async function fetchPersonals() {
    try {
        const response = await axios.get('http://localhost:3000/SegurityTeams');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
