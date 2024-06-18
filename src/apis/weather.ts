import {api} from '.';
import {ShortForecastRequest} from '../types/weather';

type Sky = '1' | '3' | '4';
type Pty = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

interface ShortForecastItem {
  time: string;
  SKY: Sky;
  PTY: Pty;
  TMP: string;
  POP: string;
}

interface UltraShortForecastItem {
  time: string;
  SKY: Sky;
  PTY: Pty;
  T1H: string;
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

export const getUltraShortForecast = async ({
  baseDate,
  baseTime,
  nx,
  ny,
}: ShortForecastRequest) => {
  const {data} = await api.get<{data: UltraShortForecastItem}>(
    '/weather/ultra-short-forecast',
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
