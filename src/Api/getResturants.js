import axios from 'axios';
import Config from 'react-native-config';

export const getResturants = async (location = 'san jose', limit = 50) => {
  const url = `https://api.yelp.com/v3/businesses/search?location=${location}&limit=${limit}`;
  const config = {headers: {Authorization: `Bearer ${Config.API_KEY}`}};
  try {
    const response = await axios.get(url, config);
    return response.data.businesses;
  } catch (err) {
    return [];
  }
};
