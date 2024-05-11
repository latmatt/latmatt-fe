import axios from 'axios';

export function categories() {
  return axios.get('/event-types');
}

export function eventTypes() {
  return axios.get('/event-types');
}

export function trendingByCategory(
  { size = 6 }: EventListParamType,
  id: string
) {
  return axios.get(`/events/${id}/trending`, { params: { size } });
}

export function comingSoonByCategory(
  { size = 6 }: EventListParamType,
  id: string
) {
  return axios.get(`/events${id}/coming-soon`, { params: { size } });
}

export function eventsByCategory({
  size = 6,
  page = 0,
  eventTypeId,
}: EventListParamType) {
  return axios.get('/events', { params: { size, page, eventTypeId } });
}
