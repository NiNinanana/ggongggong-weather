import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {skyCodeKR} from '../../constants/weather';
import {useGetUltraShortForecast} from '../../queries/weather';
import WeatherCatImage from './WeatherCatImage';

interface CurrentWetaherProps {}

const CurrentWetaher = ({}: CurrentWetaherProps) => {
  const {data: ultraShortForecast} = useGetUltraShortForecast();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.temperature}>{ultraShortForecast?.T1H}°</Text>
        {ultraShortForecast && (
          <Text style={styles.skyText}>
            {skyCodeKR[ultraShortForecast?.SKY]}
          </Text>
        )}
      </View>
      <View>
        <WeatherCatImage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  temperature: {
    fontSize: 72,
    fontWeight: '500',
  },
  skyText: {
    fontSize: 24,
    fontWeight: '500',
  },
});

export default CurrentWetaher;
