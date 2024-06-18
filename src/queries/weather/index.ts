import {useQuery} from '@tanstack/react-query';
import dayjs from 'dayjs';
import {getShortForecast, getUltraShortForecast} from '../../apis/weather';
import useGetCurrentPosition from '../../hooks/useGetCurrentPosition';
import useGetXYFromCoords from '../../hooks/useGetXYFromCoords';
import {getShortForecastBase} from '../../utils/weather';
import weatherKeys from './keys';

export const useGetShortForecast = () => {
  const {date, time} = getShortForecastBase();
  const {coords} = useGetCurrentPosition();

  const {nx, ny} = useGetXYFromCoords({coords});

  return useQuery({
    queryFn: () =>
      getShortForecast({
        baseDate: date,
        baseTime: time,
        nx,
        ny,
      }),
    queryKey: weatherKeys.shortForecast(date, time, nx, ny),
    enabled: !!nx && !!ny,
    // enabled: nx >= 21 && nx <= 144 && ny <= 147 && ny >= 32,
    select: res => res.data,
  });
};

export const useGetUltraShortForecast = () => {
  const date = dayjs().format('YYYYMMDD');
  const time = dayjs().add(-30, 'minutes').format('HHmm');

  const {coords} = useGetCurrentPosition();

  const {nx, ny} = useGetXYFromCoords({coords});

  return useQuery({
    queryFn: () =>
      getUltraShortForecast({
        baseDate: date,
        baseTime: time,
        nx,
        ny,
      }),
    queryKey: weatherKeys.shortForecast(date, time, nx, ny),
    enabled: !!nx && !!ny,
    select: res => res.data,
  });
};
