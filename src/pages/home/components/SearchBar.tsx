import { Button, Grid, Select, TextInput } from '@mantine/core';
import { CATEGORIES } from '@config/mocks';

export function SearchBar() {
  return (
    <form>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput placeholder="Search bar" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Select
            placeholder="Location"
            data={['Yangon', 'Mandalay', 'Taunggyi']}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Select placeholder="Genres" data={CATEGORIES.map((c) => c.name)} />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 2 }}>
          <Button fullWidth>Search</Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
