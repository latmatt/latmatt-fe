export const productsKeys = {
  all: ['products'] as const,
  lists: () => [...productsKeys.all, 'list'] as const,
  list: (filters: string) => [...productsKeys.lists(), { filters }] as const,
  details: () => [...productsKeys.all, 'detail'] as const,
  detail: (id: string) => [...productsKeys.details(), id] as const,
};
export const customerKeys = {
  all: ['customer'] as const,
  lists: () => [...customerKeys.all, 'list'] as const,
  list: (filters: string) => [...productsKeys.lists(), { filters }] as const,
  details: () => [...customerKeys.all, 'detail'] as const,
  detail: (id: string) => [...productsKeys.details(), id] as const,
};
