import { useQuery } from '@tanstack/react-query';
import {
  comingSoonKeys,
  earlyAccessKeys,
  eventsKeys,
  trendingKeys,
} from '@config/query-keys';
import {
  comingSoonEvents,
  earlyAccessEvents,
  events,
  trendingEvents,
} from '@services/events';

export function useGetAllEvents() {
  return useQuery({ queryKey: eventsKeys.all, queryFn: events });
}

export function useGetTrendingEvents(params: EventListParamType) {
  return useQuery({
    queryKey: [trendingKeys.all, params],
    queryFn: () => trendingEvents(params),
  });
}

export function useGetEarlyAccessEvents(params: EventListParamType) {
  return useQuery({
    queryKey: [earlyAccessKeys.all, params],
    queryFn: () => earlyAccessEvents(params),
  });
}

export function useGetComingSoonEvents(params: EventListParamType) {
  return useQuery({
    queryKey: [comingSoonKeys.all, params],
    queryFn: () => comingSoonEvents(params),
  });
}
