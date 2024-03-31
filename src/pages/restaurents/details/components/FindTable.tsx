import { Card, Button, TextInput, Stack, Title } from '@mantine/core';
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
          <TextInput label="Input label" placeholder="Input placeholder" />

          <TextInput label="Input label" placeholder="Input placeholder" />

          <TextInput label="Input label" placeholder="Input placeholder" />

          <Button onClick={() => navigate('/RESTAURANT/wef/payment')} fullWidth>
            Book Now
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
