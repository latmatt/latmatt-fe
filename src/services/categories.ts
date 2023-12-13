import axios from 'axios';

export function categories() {
  return axios.get('/events/types');
}
