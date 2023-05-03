import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const SearchBar = ({searchPhrase, setSearchPhrase, onSubmitEditing}) => {
  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'flex-start'}}>Search by location</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="enter location here"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 5,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: '90%',
  },
});
