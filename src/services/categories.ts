import axios from 'axios';

export function categories() {
  return axios.get('/event-types');
}

export function genres() {
  return axios.get('/concerts/genres');
}

export function trendingByCategory({ size = 6 }: EventListParamType) {
  return axios.get('/concerts/trending', { params: { size } });
}

export function eventsByCategory({ size = 6, page = 0 }: EventListParamType) {
  return axios.get('/concerts', { params: { size, page } });
}
