import { ReactNode } from 'react';
import { Grid, Group, Pagination, Title } from '@mantine/core';

interface Props {
  title: string;
  cardCmp: ReactNode;
}

export function CardLists({ title, cardCmp }: Props) {
  return (
    <>
      <Grid mb="lg">
        <Grid.Col span={{ base: 12 }}>
          <Title order={5} ta="center">
            {title}
          </Title>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>{cardCmp}</Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>{cardCmp}</Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>{cardCmp}</Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>{cardCmp}</Grid.Col>
      </Grid>

      <Group justify="center">
        <Pagination
          size="lg"
          total={5}
          value={2}
          //   onChange={setPage}
        />
      </Group>
    </>
  );
}
