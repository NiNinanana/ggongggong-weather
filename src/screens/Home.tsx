import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useGetLegalDongFromCoords} from '../queries/geolocation/geolocation';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const {data} = useGetLegalDongFromCoords();

  return (
    <SafeAreaView>
      <Text>{data}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
