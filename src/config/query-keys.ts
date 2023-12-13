export const eventsKeys = {
  all: ['events'] as const,
  lists: () => [...eventsKeys.all, 'list'] as const,
  list: (filters: string) => [...eventsKeys.lists(), { filters }] as const,
  details: () => [...eventsKeys.all, 'detail'] as const,
  detail: (id: string) => [...eventsKeys.details(), id] as const,
};

export const trendingKeys = {
  all: ['trendings'] as const,
  lists: () => [...trendingKeys.all, 'list'] as const,
  list: (filters: string) => [...trendingKeys.lists(), { filters }] as const,
  details: () => [...trendingKeys.all, 'detail'] as const,
  detail: (id: string) => [...trendingKeys.details(), id] as const,
};

export const earlyAccessKeys = {
  all: ['early-access'] as const,
  lists: () => [...earlyAccessKeys.all, 'list'] as const,
  list: (filters: string) => [...earlyAccessKeys.lists(), { filters }] as const,
  details: () => [...earlyAccessKeys.all, 'detail'] as const,
  detail: (id: string) => [...earlyAccessKeys.details(), id] as const,
};

export const comingSoonKeys = {
  all: ['early-access'] as const,
  lists: () => [...earlyAccessKeys.all, 'list'] as const,
  list: (filters: string) => [...earlyAccessKeys.lists(), { filters }] as const,
  details: () => [...earlyAccessKeys.all, 'detail'] as const,
  detail: (id: string) => [...earlyAccessKeys.details(), id] as const,
};

export const categoryKeys = {
  all: ['categories'] as const,
  lists: () => [...categoryKeys.all, 'list'] as const,
  list: (filters: string) => [...categoryKeys.lists(), { filters }] as const,
  details: () => [...categoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...categoryKeys.details(), id] as const,
};
