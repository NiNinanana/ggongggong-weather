import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useGetUltraShortForecast} from '../../queries/weather';

interface WeatherCatImageProps {}

const ptyCodeImages = {
  1: require('../../assets/images/weather/rain.webp'),
  2: require('../../assets/images/weather/rainWithSnow.webp'),
  3: require('../../assets/images/weather/snow.webp'),
  4: require('../../assets/images/weather/shower.webp'),
  5: require('../../assets/images/weather/raindrop.webp'),
  6: require('../../assets/images/weather/raindropWithSnowflake.webp'),
  7: require('../../assets/images/weather/snowflake.webp'),
};

const skyCodeImages = {
  1: require('../../assets/images/weather/sunny.webp'),
  3: require('../../assets/images/weather/cloudiness.webp'),
  4: require('../../assets/images/weather/cloudy.webp'),
};

const WeatherCatImage = ({}: WeatherCatImageProps) => {
  const {data: ultraShortForecast} = useGetUltraShortForecast();

  const getImageSrc = () => {
    if (!ultraShortForecast) {
      return '';
    }
    if (ultraShortForecast?.PTY !== '0') {
      return ptyCodeImages[ultraShortForecast?.PTY];
    } else {
      return skyCodeImages[ultraShortForecast?.SKY];
    }
  };

  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={getImageSrc()} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 9999,
  },
});

export default WeatherCatImage;
