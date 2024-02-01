import { useState } from 'react';
import { Box, Button, Card, Grid, Group, Loader, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { useParams } from 'react-router-dom';
import { LatMatCollapse } from '@components/collapse';
import {
  useGetEventLocations,
  useGetEventDates,
  useGetTicketZones,
  useGetTicketSeats,
} from '@pages/event-detail/queries';
import { FilterBox } from './FilterBox';
import { TicketZone } from './TicketZone';

function CollapseHeader({
  title,
  isExpended,
  isLoading = false,
}: {
  title: string;
  isExpended?: boolean;
  isLoading?: boolean;
}) {
  return (
    <Group justify="space-between" py="md">
      <Text fw="bold" fz="lg">
        {title}
      </Text>

      {isLoading ? (
        <Loader size="xs" />
      ) : !isExpended ? (
        <IconChevronDown />
      ) : (
        <IconChevronUp />
      )}
    </Group>
  );
}

export function TicketCounter() {
  const { id } = useParams();

  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const { data: locations, isLoading: locationLoading } = useGetEventLocations({
    eventId: id || '',
  });
  const { data: dates, isFetching: dateLoading } = useGetEventDates({
    eventPlaceId: location,
  });

  return (
    <form>
      <Card>
        <LatMatCollapse
          expended
          header={<CollapseHeader title="Event Venue" />}
          body={
            <Box>
              <Text>Event Venue</Text>
            </Box>
          }
        />

        <LatMatCollapse
          expended
          header={
            <CollapseHeader title="Location" isLoading={locationLoading} />
          }
          body={
            <Grid pb="md">
              {locations?.map((l: any) => (
                <Grid.Col key={l.id} span={{ xs: 6, md: 4 }}>
                  <FilterBox
                    value={l.location.city}
                    isSelect={location === l.id}
                    onSelect={() => setLocation(l.id)}
                  />
                </Grid.Col>
              ))}
            </Grid>
          }
        />

        <LatMatCollapse
          disable={!location}
          header={
            <CollapseHeader title="Date & Time" isLoading={dateLoading} />
          }
          body={
            <Grid pb="md">
              {dates?.map((d: any) => (
                <Grid.Col key={d.id} span={{ xs: 6, md: 4 }}>
                  <FilterBox
                    value={`${d.startDate} - ${d.endDate}`}
                    isSelect={date === d.id}
                    onSelect={() => setDate(d.id)}
                  />
                </Grid.Col>
              ))}
            </Grid>
          }
        />

        <LatMatCollapse
          disable={!date}
          header={<CollapseHeader title="GA" isLoading={dateLoading} />}
          body={<TicketZone />}
        />

        <Button mt="md">Buy Now</Button>
      </Card>
    </form>
  );
}
