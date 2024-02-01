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

export function eventDetails({
  size = 6,
  page = 0,
  eventGenreId,
  eventTypeId,
  id,
}: EventDetailParamType) {
  return axios.get('/events', {
    params: { size, page, eventGenreId, eventTypeId, id },
  });
}

export function eventLocations({ eventId }: EventLocationParamType) {
  return axios.get('/events/details/places', {
    params: {
      'event-id': eventId,
    },
  });
}

export function eventDates({ eventPlaceId }: EventDateParamType) {
  return axios.get('/events/details/times', {
    params: {
      'event-place-id': eventPlaceId,
    },
  });
}

export function eventTicketZones({ eventDateId }: EventZoneParamType) {
  return axios.get('/events/details/ticket-zones', {
    params: {
      'event-time-id': eventDateId,
    },
  });
}

export function eventTicketSeats({ ticketRowId }: EventSeatParamType) {
  return axios.get('/events/details/ticket-seats', {
    params: {
      'ticket-row-id': ticketRowId,
    },
  });
}
