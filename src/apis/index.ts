import axios from 'axios';
import {Platform} from 'react-native';

export const api = axios.create({
  withCredentials: true,
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:4000'
      : 'http://localhost:4000',
});
