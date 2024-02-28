import { useQuery } from '@tanstack/react-query';
import { eventsKeys } from '@config/query-keys';
import { prebuilt } from '@services/dinger';

export function useGetDingerPrebuilt(params: DingerPrebuilt) {
  return useQuery({
    queryKey: [eventsKeys.list, params],
    queryFn: () => prebuilt(params),
  });
}
