import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const DetailsScreen = ({route}) => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

DetailsScreen.propTypes = {
  id: PropTypes.string,
};

export default DetailsScreen;
