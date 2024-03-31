import { Grid, Space, Stack } from '@mantine/core';
import { CONTENT_SPACING } from '@config/const';
import { FindTable, Menus, Profile } from './components';

export function RestaurentDetailsPage() {
  return (
    <>
      <Space h={CONTENT_SPACING} />

      <Grid>
        <Grid.Col
          span={{
            xs: 12,
            md: 8,
          }}
        >
          <Stack gap="md">
            <Profile />

            <Menus />
          </Stack>
        </Grid.Col>

        <Grid.Col
          span={{
            xs: 12,
            md: 4,
          }}
        >
          <FindTable />
        </Grid.Col>
      </Grid>

      <Space h={CONTENT_SPACING} />
    </>
  );
}
