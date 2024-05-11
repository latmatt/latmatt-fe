import { Card, Button, TextInput, Stack, Title } from '@mantine/core';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { IconUsers, IconCalendar, IconClockHour2 } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

export function FindTable() {
  const navigate = useNavigate();

  return (
    <Card withBorder>
      <Title order={5} mb="sm">
        Find a Table
      </Title>
      <form>
        <Stack gap="sm">
          <TextInput
            type="number"
            placeholder="Person Count"
            leftSection={<IconUsers />}
          />

          <DatePickerInput
            placeholder="Choose Date"
            minDate={new Date()}
            leftSection={<IconCalendar />}
          />

          <TimeInput
            placeholder="Choose Time"
            leftSection={<IconClockHour2 />}
          />

          <Button
            onClick={() => navigate('/restaurants/wef/payment')}
            fullWidth
          >
            Book Now
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
