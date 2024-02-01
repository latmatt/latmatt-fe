import { useQuery } from '@tanstack/react-query';
import { eventsKeys } from '@config/query-keys';
import {
  eventDates,
  eventDetails,
  eventLocations,
  eventTicketSeats,
  eventTicketZones,
} from '@services/events';

export function useGetEventDetails(params: EventDetailParamType) {
  return useQuery({
    queryKey: [eventsKeys.list, params],
    queryFn: () => eventDetails(params),
  });
}

export function useGetEventLocations(params: EventLocationParamType) {
  return useQuery({
    queryKey: [eventsKeys.list, params],
    queryFn: () => eventLocations(params),
    select: (data) => data.data.data,
  });
}

export function useGetEventDates(params: EventDateParamType) {
  return useQuery({
    queryKey: [eventsKeys.list, params],
    queryFn: () => eventDates(params),
    enabled: Boolean(params.eventPlaceId),
    select: (data) => data.data.data,
  });
}

export function useGetTicketZones(params: EventZoneParamType) {
  return useQuery({
    queryKey: [eventsKeys.list, params],
    queryFn: () => eventTicketZones(params),
    enabled: Boolean(params.eventDateId),
    select: (data) => data.data.data,
  });
}

export function useGetTicketSeats(params: EventSeatParamType) {
  return useQuery({
    queryKey: [eventsKeys.list, params],
    queryFn: () => eventTicketSeats(params),
    enabled: Boolean(params.ticketRowId),
    select: (data) => data.data.data,
  });
}
