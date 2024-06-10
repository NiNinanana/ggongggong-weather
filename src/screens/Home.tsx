import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useGetLegalDongFromCoords} from '../queries/geolocation';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const {data: legalDong} = useGetLegalDongFromCoords();

  return (
    <SafeAreaView>
      <Text>{legalDong}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
