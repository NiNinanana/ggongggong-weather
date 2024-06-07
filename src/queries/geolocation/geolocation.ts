import Geolocation from '@react-native-community/geolocation';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {getLegalDongFromCoords} from '../../apis/geolocation';
import {Coords} from '../../types/geolocation';
import {geolocationKeys} from './keys';

export const useGetLegalDongFromCoords = () => {
  const [coords, setCoords] = useState<Coords>();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const longitude = info.coords.longitude;
      const latitude = info.coords.latitude;
      setCoords(`${longitude},${latitude}`);
    });
  }, []);

  return useQuery({
    queryFn: () => getLegalDongFromCoords({coords}),
    queryKey: geolocationKeys.legalDongFromCoords(coords),
    enabled: !!coords,
    select: res => res.results[0].region.area3.name,
  });
};
