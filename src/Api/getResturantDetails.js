import axios from 'axios';
import Config from 'react-native-config';

export const getResturantDetails = async id => {
  const url = ` https://api.yelp.com/v3/businesses/${id}`;
  const config = {headers: {Authorization: `Bearer ${Config.API_KEY}`}};
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (err) {
    return [];
  }
};
