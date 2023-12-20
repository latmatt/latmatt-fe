import { Button, Card, Space } from '@mantine/core';
import { TicketCounter } from './TicketCounter';

export function TicketCenter() {
  return (
    <Card bg="white" p="md" radius="sm">
      <TicketCounter price="1,000 ks" type="GA Ticket" />

      <Space h="lg" />

      <TicketCounter price="1,000 ks" type="VIP Ticket" />

      <Button fullWidth mt="md">
        Buy Now
      </Button>
    </Card>
  );
}
