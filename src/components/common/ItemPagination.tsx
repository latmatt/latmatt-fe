import { Box, Grid, Group, Pagination, Title } from '@mantine/core';
import { ItemCard } from '@components/card';
import { CardLoading } from '@components/loading/CardListLoading';

interface Props {
  data: Event[];
  isLoading: boolean;
  activePage: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export function ItemPangination({
  data,
  isLoading,
  activePage,
  setPage,
  totalPages,
}: Props) {
  return (
    <Box>
      <Title order={5} ta="center" mb="lg">
        All Concerts
      </Title>

      {isLoading ? (
        <Box mb="lg">
          <CardLoading countNumber={4} span={{ base: 12, sm: 4, md: 3 }} />
        </Box>
      ) : (
        <Grid mb="lg">
          {data.map((event) => (
            <Grid.Col key={event.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <ItemCard item={event} />
            </Grid.Col>
          ))}
        </Grid>
      )}

      <Group justify="center">
        <Pagination
          size="lg"
          total={totalPages}
          value={activePage}
          onChange={setPage}
        />
      </Group>
    </Box>
  );
}
