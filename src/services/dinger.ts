import axios from 'axios';

export function dingerPrebuilt(data: DingerPrebuiltPayload) {
  return axios.post('/dinger/payload', data);
}
