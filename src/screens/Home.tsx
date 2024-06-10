import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useGetLegalDongFromCoords} from '../queries/geolocation';
import TimeWeather from '../components/TimeWeather';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const {data: legalDong} = useGetLegalDongFromCoords();

  return (
    <SafeAreaView>
      <Text>{legalDong}</Text>
      <TimeWeather />
    </SafeAreaView>
  );
};

export default HomeScreen;
