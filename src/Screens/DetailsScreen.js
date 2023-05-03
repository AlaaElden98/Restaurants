/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import {getResturantDetails} from '../Api/getResturantDetails';

const DetailsScreen = ({route}) => {
  const {id} = route.params;
  const [restaurantDetails, setRestaurantDetails] = useState();

  const getDetails = async () => {
    const data = await getResturantDetails(id);
    setRestaurantDetails(data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    // For the Map we need to install react-native-maps and generate API key for Android SDK
    <View>
      {restaurantDetails ? (
        <View>
          <Text>{restaurantDetails.alias}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DetailsScreen;
