import axios from 'axios';

export function events() {
  return axios.get('/events');
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
