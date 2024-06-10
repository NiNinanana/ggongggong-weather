import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useGetShortForecast} from '../queries/weather';

interface TimeWeatherProps {}

const TimeWeather = ({}: TimeWeatherProps) => {
  const {data: shortForecast} = useGetShortForecast();

  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {shortForecast?.map(timeWeather => (
        <View style={styles.timeWeather} key={timeWeather.time}>
          <Text>{timeWeather.time}</Text>
          <Text>{timeWeather.TMP}°</Text>
          <Text>{timeWeather.POP}%</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    gap: 10,
  },
  timeWeather: {
    alignItems: 'center',
  },
});

export default TimeWeather;
