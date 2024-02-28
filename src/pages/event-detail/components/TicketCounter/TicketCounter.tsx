import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Center,
  Grid,
  Group,
  Loader,
  Text,
  Image,
  Space,
  Stack,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';
import { LatMatCollapse } from '@components/collapse';
import {
  useGetEventLocations,
  useGetEventDates,
  useGetTicketZones,
} from '@pages/event-detail/queries';
import { FilterBox } from './FilterBox';
import { TicketZone } from './TicketZone';
import { TicketZoneWithRow } from './TicketZoneRowSeat';
import { TicketZoneWithSeats } from './TicketZoneSeats';

interface TicketZoneViewerProps {
  zones: EventZones[];
  ticketStatus: EventStatus | null;
}

function CollapseHeader({
  title,
  isExpended,
  isLoading = false,
  disable = false,
}: {
  title: string;
  isExpended?: boolean;
  isLoading?: boolean;
  disable?: boolean;
}) {
  return (
    <Group justify="space-between" py="md">
      <Text fw="bold" fz="lg" c={disable ? 'dark.0' : 'neutral.8'}>
        {title}
      </Text>

      {isLoading ? (
        <Loader size="xs" />
      ) : !isExpended ? (
        <IconChevronDown color={disable ? '#E9ECEF' : '#333333'} />
      ) : (
        <IconChevronUp color={disable ? '#E9ECEF' : '#333333'} />
      )}
    </Group>
  );
}

function TicketZoneViewer({ zones, ticketStatus }: TicketZoneViewerProps) {
  if (ticketStatus === 'ZONE_ROW_SEAT') {
    return (
      <>
        {zones.map((z: EventZones) => (
          <LatMatCollapse
            key={z.id}
            header={<CollapseHeader title={z.name} />}
            body={<TicketZoneWithRow rows={z.ticketRows} />}
          />
        ))}
      </>
    );
  }

  if (ticketStatus === 'ZONE_SEAT') {
    return (
      <>
        {zones.map((z: EventZones) => (
          <LatMatCollapse
            key={z.id}
            header={<CollapseHeader title={z.name} />}
            body={<TicketZoneWithSeats rows={z.ticketRows} />}
          />
        ))}
      </>
    );
  }

  return (
    <Stack gap="sm" mt="sm">
      {zones.map((z: EventZones) => (
        <TicketZone key={z.id} zone={z} price={z.ticketRows[0].price} />
      ))}
    </Stack>
  );
}

export function TicketCounter() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [venueMap, setVenueMap] = useState<string>('');
  const [zoneType, setZoneType] = useState<EventStatus>();
  // const [selectedTickets, setSelectedTickets] = useState([]);

  const { data: locations, isLoading: locationLoading } = useGetEventLocations({
    eventId: id || '',
  });
  const { data: dates, isFetching: dateLoading } = useGetEventDates({
    eventPlaceId: location,
  });
  const { data: zones, isFetching: zoneLoading } = useGetTicketZones({
    eventDateId: date,
  });

  const handleCheckout = () => {
    navigate('/a/payment');
  };

  return (
    <Card>
      <LatMatCollapse
        expended
        header={<CollapseHeader title="Location" isLoading={locationLoading} />}
        body={
          <Grid pb="md">
            {locations?.map((l: EventLocation) => (
              <Grid.Col key={l.id} span={{ xs: 6, md: 6 }}>
                <FilterBox
                  value={l.location.city}
                  isSelect={location === l.id}
                  onSelect={() => {
                    setLocation(l.id);
                    setVenueMap(l.venueMap);
                  }}
                />
              </Grid.Col>
            ))}
          </Grid>
        }
      />

      <LatMatCollapse
        disable={!location}
        header={
          <CollapseHeader
            title="Event Venue"
            isLoading={dateLoading}
            disable={!location}
          />
        }
        body={
          <Box>
            <Image radius="sm" src={venueMap} />

            <Space h="sm" />
          </Box>
        }
      />

      <LatMatCollapse
        disable={!location}
        header={
          <CollapseHeader
            title="Date & Time"
            isLoading={dateLoading}
            disable={!location}
          />
        }
        body={
          <Grid pb="md">
            {dates?.map((d: any) => (
              <Grid.Col key={d.id} span={{ xs: 6 }}>
                <FilterBox
                  value={`${dayjs(d.startDate).format('DD/MM/YYYY')}`}
                  isSelect={date === d.id}
                  onSelect={() => {
                    setDate(d.id);
                    setZoneType(d.type);
                  }}
                />
              </Grid.Col>
            ))}
          </Grid>
        }
      />

      {zoneLoading && (
        <Center py="sm">
          <Loader size="sm" />
        </Center>
      )}

      {zones && !zoneLoading && (
        <TicketZoneViewer
          zones={zones}
          ticketStatus={zoneType as EventStatus}
        />
      )}

      <Button onClick={handleCheckout} mt="md">
        Buy
      </Button>
    </Card>
  );
}
