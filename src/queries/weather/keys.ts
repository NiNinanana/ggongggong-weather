const weatherKeys = {
  all: ['weather'],
  shortForecast: (
    baseDate: string,
    baseTime: string,
    nx: number,
    ny: number,
  ) => [...weatherKeys.all, 'shortForecast', baseDate, baseTime, nx, ny],
};

export default weatherKeys;
