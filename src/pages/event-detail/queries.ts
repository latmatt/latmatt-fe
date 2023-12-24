import { useQuery } from '@tanstack/react-query';
import { eventsKeys } from '@config/query-keys';
import { eventDetails } from '@services/events';

export function useGetEventDetails(params: EventDetailParamType) {
  return useQuery({
    queryKey: [eventsKeys.list, params],
    queryFn: () => eventDetails(params),
  });
}
