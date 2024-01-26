import { Box, Button, Grid, Stack, Text, Image } from '@mantine/core';
import TicketImg from '@assets/images/common/ticketfront.png';
import { DataColumn, DataRow } from '@components/common';
import classes from './styles.module.css';

export function PurchaseInfoPage() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 7, md: 9 }}>
        <Box className={classes.purchaseContainer}>
          <Box bg="primary" py="md">
            <Text ta="center" c="white" fz="lg" fw="bold">
              Purchasing Information
            </Text>
          </Box>

          <Box p="md">
            <Grid>
              <Grid.Col span={6}>
                <Stack>
                  <DataRow label="Transaction ID" value="1124557TT" />

                  <DataRow label="Purchasing Date" value="2023.12.16" />
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack>
                  {/* <DataRow label="Transaction ID" value="1124557TT" /> */}

                  <DataRow label="Purchasing  Time" value="11:07 AM ( MT )" />
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>

          <Box bg="neutral.1" py="md" px="md">
            <Text fw="bold" fz="lg">
              Customer Information
            </Text>
          </Box>

          <Box p="md">
            <Grid>
              <Grid.Col span={4}>
                <DataColumn label="Customer Name" value="Daniel Khant" />
              </Grid.Col>
              <Grid.Col span={4}>
                <DataColumn label="Phone Number" value="09 420148498" />
              </Grid.Col>
              <Grid.Col span={4}>
                <DataColumn label="Email" value="phonekhant156@gmail.com" />
              </Grid.Col>
            </Grid>
          </Box>

          <Box bg="neutral.1" py="md" px="md">
            <Text fw="bold" fz="lg">
              Event Details
            </Text>
          </Box>

          <Box p="md">
            <Grid>
              <Grid.Col span={4}>
                <DataColumn label="Event Date" value="2024.01.02" />
              </Grid.Col>
              <Grid.Col span={4}>
                <DataColumn label="Event Time" value="6 : 00 PM" />
              </Grid.Col>
              <Grid.Col span={4}>
                <DataColumn
                  label="Event Place"
                  value="Thuwanabumi Event Park"
                />
              </Grid.Col>
            </Grid>
          </Box>

          <Box bg="neutral.1" py="md" px="md">
            <Text fw="bold" fz="lg">
              Ticket Details
            </Text>
          </Box>

          <Box p="md">
            <Grid>
              <Grid.Col span={4}>
                <DataColumn label="Event Date" value="2024.01.02" />
              </Grid.Col>
              <Grid.Col span={4}>
                <DataColumn label="Event Time" value="6 : 00 PM" />
              </Grid.Col>
              <Grid.Col span={4}>
                <DataColumn
                  label="Event Place"
                  value="Thuwanabumi Event Park"
                />
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
        <Stack>
          <Image src={TicketImg} />
          <Button>Download Ticket</Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
