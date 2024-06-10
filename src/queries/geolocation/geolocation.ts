import {useQuery} from '@tanstack/react-query';
import {getLegalDongFromCoords} from '../../apis/geolocation';
import useGetCurrentPosition from '../../hooks/useGetCurrentPosition';
import {geolocationKeys} from './keys';

export const useGetLegalDongFromCoords = () => {
  const {coords} = useGetCurrentPosition();

  return useQuery({
    queryFn: () => getLegalDongFromCoords({coords}),
    queryKey: geolocationKeys.legalDongFromCoords(coords),
    enabled: !!coords,
    select: res => res.results[0].region.area3.name,
  });
};
