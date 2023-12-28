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
              <ItemCard
                item={
                  {
                    id: 'dd2902a6-8a84-4901-b7b7-0c90e09c21ab',
                    title: 'Concert 4',
                    description: 'xxx',
                    startDate: '2023-11-10',
                    startTime: '12:00:00',
                    endDate: '2023-11-11',
                    endTime: '12:00:00',
                    earlyAccessExpiredDate: '2024-12-30',
                    image:
                      'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg',
                    coverImage:
                      'https://timelinecovers.pro/facebook-cover/download/ultra-hd-space-facebook-cover.jpg',
                    userClickCount: 100,
                    location: {
                      id: 'dd2902a6-8a84-4901-b7b7-0c90e09c21fd',
                      name: 'xxx',
                      street: 'HninSi',
                      city: 'Mandalay',
                      state: 'xxx',
                      zipCode: '1112',
                      mapLink:
                        'https://developers.google.com/maps/documentation/urls/get-started',
                      phone: 'xxx',
                    },
                  } as unknown as Event
                }
              />
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
