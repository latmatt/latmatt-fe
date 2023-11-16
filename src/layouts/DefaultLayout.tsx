import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <Container bg="gray.0" p="sm" size="xl">
      <Outlet />
    </Container>
  );
}
