import { useQuery } from '@tanstack/react-query';
import {
  categoryKeys,
  comingSoonKeys,
  earlyAccessKeys,
  eventsKeys,
  trendingKeys,
} from '@config/query-keys';
import { categories } from '@services/categories';
import {
  comingSoonEvents,
  earlyAccessEvents,
  events,
  trendingEvents,
} from '@services/events';

export function useGetCategories() {
  return useQuery({
    queryKey: categoryKeys.all,
    queryFn: categories,
  });
}

export function useGetAllEvents(params: EventListParamType) {
  return useQuery({
    queryKey: [eventsKeys.all, params],
    queryFn: () => events(params),
  });
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
