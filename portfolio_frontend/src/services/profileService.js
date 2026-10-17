import { USE_MOCKS } from '../config';
import { profileMock } from '../mocks/profile';
import { request } from './httpClient';

// GET /profile
export const getProfile = () =>
  USE_MOCKS ? Promise.resolve(profileMock) : request('/profile');
