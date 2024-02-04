import { Box, Grid, Space, Text } from '@mantine/core';
import classes from './style.module.css';

function Row() {
  return (
    <Grid.Col span={{ base: 12 / 8, sm: 12 / 8, md: 12 / 8 }}>
      <Box className={classes.rowContainer}>
        <Text fz="sm">1</Text>
      </Box>
    </Grid.Col>
  );
}

function Seat() {
  return (
    <Grid.Col span={{ base: 12 / 8, sm: 12 / 8, md: 12 / 8 }}>
      <Box className={classes.seatContainer}>
        <Text fz="sm">1</Text>
      </Box>
    </Grid.Col>
  );
}

export function TicketZone() {
  return (
    <Box>
      <Box p="sm" bg="neutral.0">
        <Text fw="bold">Rows</Text>

        <Grid gutter={2}>
          <Row />

          <Row />

          <Row />

          <Row />

          <Row />

          <Row />
        </Grid>
      </Box>

      <Space h="sm" />

      <Box p="sm" bg="neutral.0">
        <Text fw="bold">Seats</Text>

        <Grid gutter={2}>
          <Seat />

          <Seat />

          <Seat />

          <Seat />

          <Seat />

          <Seat />
        </Grid>
      </Box>

      <Space h="sm" />
    </Box>
  );
}
