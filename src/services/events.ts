import axios from 'axios';

export function events({ size = 6 }: EventListParamType) {
  return axios.get('/events', { params: { size, page: 0 } });
}

export function trendingEvents({ size = 6 }: EventListParamType) {
  return axios.get('/events/trending', { params: { size } });
}

export function earlyAccessEvents({ size = 6 }: EventListParamType) {
  return axios.get('/events/early-access', { params: { size } });
}

export function comingSoonEvents({ size = 6 }: EventListParamType) {
  return axios.get('/events/coming-soon', { params: { size } });
}
