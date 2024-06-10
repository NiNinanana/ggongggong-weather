import {api} from '.';
import {Coords} from '../types/geolocation';

export const getLegalDongFromCoords = async ({coords}: {coords?: Coords}) => {
  const {data} = await api.get('/geolocation/legal-from-coords', {
    params: {coords},
  });

  return data;
};
