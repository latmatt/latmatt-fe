import { Grid, Skeleton } from '@mantine/core';
import { useMemo, useState } from 'react';

interface Props {
  countNumber: number;
  span: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  height?: number;
}

export function CardLoading({ countNumber, span, height = 300 }: Props) {
  const [countArray, setcountArray] = useState<number[]>([]);

  useMemo(() => {
    const result: number[] = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < countNumber; i++) {
      result.push(i);
    }

    setcountArray(result);
  }, [countNumber]);

  return (
    <Grid>
      {countArray.map((ca) => (
        <Grid.Col key={ca} span={span}>
          <Skeleton radius="lg" height={height} width="100%" />
        </Grid.Col>
      ))}
    </Grid>
  );
}
