import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomTextInput from './customTextInput';

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('');

  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
        style={styles.input}
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => searchWeather(location)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'darkblue', 
    padding: 10, 
    alignItems: 'center', 
    borderRadius: 8, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#DDD',
    padding: 10,
  },
});

export default WeatherSearch;
