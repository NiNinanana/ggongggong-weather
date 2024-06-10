import {api} from '.';
import {ShortForecastRequest} from '../types/weather';

interface ShortForecastItem {
  time: string;
  SKY: string;
  PTY: string;
  TMP: string;
  POP: string;
}

export const getShortForecast = async ({
  baseDate,
  baseTime,
  nx,
  ny,
}: ShortForecastRequest) => {
  const {data} = await api.get<{data: ShortForecastItem[]}>(
    '/weather/short-forecast',
    {
      params: {
        baseDate,
        baseTime,
        nx,
        ny,
      },
    },
  );

  return data;
};
