import { useQuery } from '@tanstack/react-query';
import {
  evnetsByCategoryKeys,
  eventTypeKeys,
  trendingByCategoryKeys,
} from '@config/query-keys';
import {
  comingSoonByCategory,
  eventTypes,
  eventsByCategory,
  trendingByCategory,
} from '@services/categories';

export function useGetEventTypes() {
  return useQuery({
    queryKey: eventTypeKeys.all,
    queryFn: eventTypes,
  });
}

export function useGetTrendingEventsByCategory(
  params: EventListParamType,
  id: string
) {
  return useQuery({
    queryKey: [trendingByCategoryKeys.all, params, id],
    queryFn: () => trendingByCategory(params, id),
  });
}

export function useGetComingSoonEventsByCategory(
  params: EventListParamType,
  id: string
) {
  return useQuery({
    queryKey: [trendingByCategoryKeys.all, params, id],
    queryFn: () => comingSoonByCategory(params, id),
  });
}

export function useGetEventsByCategory(params: EventDetailParamType) {
  return useQuery({
    queryKey: [evnetsByCategoryKeys.all, params],
    queryFn: () => eventsByCategory(params),
  });
}
