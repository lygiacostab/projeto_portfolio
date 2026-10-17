import { USE_MOCKS } from '../config';
import { worksMock } from '../mocks/works';
import { request } from './httpClient';

// GET /works
export const getWorks = () =>
  USE_MOCKS ? Promise.resolve(worksMock) : request('/works');
