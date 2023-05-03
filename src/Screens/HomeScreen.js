/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SectionList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {getResturants} from '../Api/getResturants';
import SearchBar from '../Components/SearchBar';

const HomeScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState();
  const [searchPhrase, setSearchPhrase] = useState();

  const prepareSectionData = data => {
    return [
      {
        title: 'Cost Effective',
        data: data.filter(x => x.price === '$'),
      },
      {
        title: 'Bit Pricer',
        data: data.filter(x => x.price === '$$'),
      },
      {
        title: 'Bi Spender!',
        data: data.filter(x => x.price === '$$$'),
      },
    ];
  };

  const getResturantsData = async searchText => {
    const data = await getResturants(searchText || 'san jose');
    const SectionData = prepareSectionData(data);
    console.log(data.length, searchText);
    setRestaurants(SectionData);
  };

  useEffect(() => {
    getResturantsData();
  }, []);

  const renderSectionItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Details', {id: item.id})}>
        <ImageBackground source={{uri: item.image_url}} style={{height: 100}}>
          <View style={{padding: 8}}>
            <Text style={{color: 'white'}}>{item.name}</Text>
            <View
              style={{
                padding: 5,
                marginTop: 30,
                borderRadius: 14,
                flexDirection: 'row',
                alignSelf: 'flex-start',
                backgroundColor: 'white',
              }}>
              <Text>{item.rating} Stars, </Text>
              <Text>{item.review_count} Review</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <SearchBar
        setSearchPhrase={text => setSearchPhrase(text)}
        searchPhrase={searchPhrase}
        onSubmitEditing={() => getResturantsData(searchPhrase)}
      />
      {restaurants ? (
        <SectionList
          sections={restaurants}
          renderItem={renderSectionItem}
          contentContainerStyle={{backgroundColor: 'white'}}
          ItemSeparatorComponent={() => <View style={{padding: 6}} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{padding: 6, fontSize: 18}}>{title}</Text>
          )}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
};

export default HomeScreen;
