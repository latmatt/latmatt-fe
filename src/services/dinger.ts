import { dingerApi } from '@utils/axiosInstances';

export function prebuilt(params: DingerPrebuilt) {
  return dingerApi.get('/', { params });
}
