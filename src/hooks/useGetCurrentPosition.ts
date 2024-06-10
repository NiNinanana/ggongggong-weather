import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {Coords} from '../types/geolocation';

const useGetCurrentPosition = () => {
  const [coords, setCoords] = useState<Coords>();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const longitude = info.coords.longitude;
      const latitude = info.coords.latitude;
      setCoords(`${longitude},${latitude}`);
    });
  }, []);

  return {coords};
};

export default useGetCurrentPosition;
