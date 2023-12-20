import { useQuery } from '@tanstack/react-query';
import {
  evnetsByCategoryKeys,
  genresKeys,
  trendingByCategoryKeys,
} from '@config/query-keys';
import {
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

export function useGetTrendingEventsByCategory(params: EventListParamType) {
  return useQuery({
    queryKey: [trendingByCategoryKeys.all, params],
    queryFn: () => trendingByCategory(params),
  });
}

export function useGetEventsByCategory(params: EventListParamType) {
  return useQuery({
    queryKey: [evnetsByCategoryKeys.all, params],
    queryFn: () => eventsByCategory(params),
  });
}
