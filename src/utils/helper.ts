import JSEncrypt from 'jsencrypt';
import qs from 'qs';

export function queryString(value?: object) {
  return qs.stringify(value, { skipNulls: true, addQueryPrefix: true });
}

export function formatCurrency(amount: number, currency?: boolean) {
  if (amount === undefined) return '-';
  return `${new Intl.NumberFormat().format(amount)} ${currency ? 'MMK' : ''}`;
}

export function encryptDataWithRSA(data: any, encryptKey: any) {
  const encrypt = new JSEncrypt({ default_key_size: '5048' });
  encrypt.setPublicKey(encryptKey);
  const maxChunkLength = 100;
  let output = '';
  let inOffset = 0;
  while (inOffset < data.length) {
    output += encrypt.encrypt(
      data.substring(inOffset, inOffset + maxChunkLength)
    );
    inOffset += maxChunkLength;
  }
  return output;
}
