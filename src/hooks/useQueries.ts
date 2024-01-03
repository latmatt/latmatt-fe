/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useQueries() {
  const [searchParams] = useSearchParams();
  const [queries, setQueries] = useState<any>({});

  useEffect(() => {
    const queriesObj: any = {};
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      queriesObj[param] = value;
    }
    setQueries(queriesObj);
  }, [searchParams]);

  return {
    queries,
  };
}
