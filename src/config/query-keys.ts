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

export const eventTypeKeys = {
  all: ['eventType'] as const,
  lists: () => [...eventTypeKeys.all, 'list'] as const,
  list: (filters: string) => [...eventTypeKeys.lists(), { filters }] as const,
  details: () => [...eventTypeKeys.all, 'detail'] as const,
  detail: (id: string) => [...eventTypeKeys.details(), id] as const,
};

export const trendingByCategoryKeys = {
  all: ['trendingByCat'] as const,
  lists: () => [...trendingByCategoryKeys.all, 'list'] as const,
  list: (filters: string) =>
    [...trendingByCategoryKeys.lists(), { filters }] as const,
  details: () => [...trendingByCategoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...trendingByCategoryKeys.details(), id] as const,
};

export const evnetsByCategoryKeys = {
  all: ['eventsByCat'] as const,
  lists: () => [...evnetsByCategoryKeys.all, 'list'] as const,
  list: (filters: string) =>
    [...evnetsByCategoryKeys.lists(), { filters }] as const,
  details: () => [...evnetsByCategoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...evnetsByCategoryKeys.details(), id] as const,
};

export const dingerPrebuiltKeys = {
  all: ['dinger-prebuilt'] as const,
  lists: () => [...dingerPrebuiltKeys.all, 'list'] as const,
  list: (filters: string) =>
    [...dingerPrebuiltKeys.lists(), { filters }] as const,
  details: () => [...dingerPrebuiltKeys.all, 'detail'] as const,
  detail: (id: string) => [...dingerPrebuiltKeys.details(), id] as const,
};
