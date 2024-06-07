import {Coords} from '../../types/geolocation';

export const geolocationKeys = {
  all: ['geolocation'],
  legalDongFromCoords: (coords?: Coords) => [
    ...geolocationKeys.all,
    'legalDongFromCoords',
    coords,
  ],
};
