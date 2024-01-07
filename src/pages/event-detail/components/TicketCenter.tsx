import { Button, Card, Accordion, Text, Image, Box } from '@mantine/core';
import { TicketCounter } from './TicketCounter';
import { TicketSeats } from './TicketSeats';

interface Props {
  data: EventDetail;
}

export function TicketCenter({ data }: Props) {
  return (
    <Card bg="white" radius="sm">
      <Accordion defaultValue="Apples">
        <Accordion.Item value="venue">
          <Accordion.Control>
            <Text fw="bold">Event Venue</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Image src={data.venueMap} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="date">
          <Accordion.Control>
            <Text fw="bold">Date & Time</Text>
          </Accordion.Control>
          <Accordion.Panel>
            {data.eventVenues.map((seat) => (
              <Box key={seat.id}>
                <Text>{seat.startDate}</Text>
              </Box>
            ))}
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="ga">
          <Accordion.Control>
            <Text fw="bold">GA</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <TicketSeats data={data.eventVenues[0].ticketSeats} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="vip">
          <Accordion.Control>
            <Text fw="bold">VIP</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <TicketCounter price="1,000 ks" type="VIP Ticket" />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Button fullWidth mt="md">
        Buy Now
      </Button>
    </Card>
  );
}
