import { Button, Grid, Select, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { CATEGORIES } from '@config/mocks';
import classes from './style.module.css';

export function SearchBar() {
  return (
    <form>
      <Grid gutter={0} className={classes.searchbar}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            variant="unstyled"
            leftSection={<IconSearch />}
            placeholder="Search for artists, events and funs"
            className={classes.borderRight}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Select
            placeholder="Location"
            data={['Yangon', 'Mandalay', 'Taunggyi']}
            variant="unstyled"
            pl="md"
            className={classes.borderRight}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Select
            variant="unstyled"
            placeholder="Genres"
            data={CATEGORIES.map((c) => c.name)}
            pl="md"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 2 }}>
          <Button radius={0} fullWidth>
            Search
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
