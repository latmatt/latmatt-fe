import { useShallowEffect } from '@mantine/hooks';
import { pickBy, identity } from 'lodash-es';
import { useSearchParams } from 'react-router-dom';

type VALUE = string | null | number;

function removeNil(obj: Record<string, VALUE>) {
  return pickBy(obj, identity) as Record<string, string>;
}

export function useParamsHelper(defaultParams?: Record<string, string>) {
  const [searchParams, setSearchParams] = useSearchParams();

  useShallowEffect(() => {
    if (defaultParams) setSearchParams(removeNil(defaultParams));
  }, [defaultParams]);

  const getParam = (key: string) => searchParams.get(key);

  const getParams = () => Object.fromEntries([...searchParams]);

  const replaceParams = (newParams: Record<string, VALUE>) => {
    setSearchParams(removeNil(newParams));
  };

  const setParam = (key: string, value?: VALUE) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams(removeNil({ ...params, [key]: `${value}` }));
  };

  const setParams = (newParams: Record<string, VALUE>) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams(removeNil({ ...params, ...newParams }));
  };

  return {
    getParam,
    getParams,
    replaceParams,
    setParam,
    setParams,
    searchParams,
  };
}
