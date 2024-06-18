import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {Coords} from '../types/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

const useGetCurrentPosition = () => {
  const [coords, setCoords] = useState<Coords>();

  const requestLocationPermission = async () => {
    if (Platform.OS !== 'android') {
      return true;
    }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs to access your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        return true;
      } else {
        console.log('Location permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      const hasPermission = await requestLocationPermission();
      console.log('hasPermission', hasPermission);
      if (!hasPermission) {
        return;
      }

      Geolocation.getCurrentPosition(
        info => {
          const longitude = info.coords.longitude;
          const latitude = info.coords.latitude;
          setCoords(`${longitude},${latitude}`);
        },
        error => console.log(error),
        {
          enableHighAccuracy: false, // 정확도를 높입니다.
          timeout: 20000, // 20초의 시간 제한
          maximumAge: 1000, // 캐시된 위치 정보를 최대 1초간 유지
        },
      );
    };

    getLocation();
  }, []);

  return {coords};
};

export default useGetCurrentPosition;
