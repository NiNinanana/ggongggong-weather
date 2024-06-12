import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useGetLegalDongFromCoords} from '../queries/geolocation';
import TimeWeather from '../components/TimeWeather';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const {data: legalDong} = useGetLegalDongFromCoords();

  return (
    <SafeAreaView>
      <Text style={styles.text}>{legalDong}</Text>
      <TimeWeather />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default HomeScreen;
