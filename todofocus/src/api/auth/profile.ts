import { fechUserProfile } from '../store';

export const fetchUserDetail = () => {
  const detail = fechUserProfile();

  return detail;
}