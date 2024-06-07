import {api} from '.';
import {Coords} from '../types/geolocation';

export const getLegalDongFromCoords = async ({coords}: {coords?: Coords}) => {
  const clientId = process.env.NCP_CLIENT_ID;
  const clientSecret = process.env.NCP_CLIENT_SECRET;

  const url = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${coords}&orders=legalcode&output=json`;

  const {data} = await api.get(url, {
    headers: {
      'X-NCP-APIGW-API-KEY-ID': clientId,
      'X-NCP-APIGW-API-KEY': clientSecret,
    },
  });

  return data;
};
