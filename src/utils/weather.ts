import dayjs from 'dayjs';

const BASE_TIME = [
  '2300',
  '2000',
  '1700',
  '1400',
  '1100',
  '0800',
  '0500',
  '0200',
];

interface ForecastBase {
  date: string; // 날짜는 'YYYYMMDD' 형식으로 반환
  time: string; // 시간은 'HHmm' 형식으로 반환
}

export const getShortForecastBase = (): ForecastBase => {
  const currentTime = dayjs().format('HHmm');
  const today = dayjs().format('YYYYMMDD');
  const yesterday = dayjs().subtract(1, 'day').format('YYYYMMDD');

  for (const base of BASE_TIME) {
    const baseTimeWithToday = dayjs(`${today} ${base}`, 'YYYYMMDD HHmm');
    const baseWithTenMinutes = baseTimeWithToday
      .add(10, 'minute')
      .format('HHmm');

    if (currentTime >= baseWithTenMinutes) {
      return {
        date: today,
        time: base,
      };
    }
  }

  return {
    date: yesterday,
    time: '2300',
  };
};
