import { useQuery } from '@tanstack/react-query';
import {
  evnetsByCategoryKeys,
  genresKeys,
  trendingByCategoryKeys,
} from '@config/query-keys';
import {
  comingSoonByCategory,
  eventsByCategory,
  genres,
  trendingByCategory,
} from '@services/categories';

export function useGetGenres() {
  return useQuery({
    queryKey: genresKeys.all,
    queryFn: genres,
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
