import { Stack, Box, Grid, TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import classes from './style.module.css';

export function Searchbar() {
  return (
    <Stack justify="center" w="100%" h="100%" my="xl">
      <Box w="100%">
        <form>
          <Grid gutter={0} className={classes.searchbar} bg="white">
            <Grid.Col span={{ base: 12, md: 10 }}>
              <TextInput
                variant="unstyled"
                leftSection={<IconSearch />}
                placeholder="Search for artists, events and funs"
                className={classes.borderRight}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 2 }}>
              <Button radius={0} fullWidth>
                Search
              </Button>
            </Grid.Col>
          </Grid>

          <Grid gutter="md" className={classes.mobileSearchbar}>
            <Grid.Col span={{ base: 12 }}>
              <TextInput
                leftSection={<IconSearch />}
                placeholder="Search for artists, events and funs"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12 }}>
              <Button fullWidth>Search</Button>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
    </Stack>
  );
}
