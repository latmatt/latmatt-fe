import { useEffect, useRef } from 'react';
import { Stack, Grid, TextInput, Select, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { LAYOUT_PADDING } from '@config/const';
import { CATEGORIES } from '@config/mocks';
import classes from './style.module.css';

export function SearchBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const inputRef = useRef<any>();

  useEffect(() => {
    if (pathname === '/search-results' && inputRef) {
      inputRef.current.focus();
    }
  });

  return (
    <Stack
      justify="center"
      w="100%"
      h={{
        base: 'auto',
        sm: 150,
        md: 200,
      }}
      bg={{ base: 'white', sm: 'primary' }}
      px={LAYOUT_PADDING}
    >
      <form>
        <Grid gutter={0} className={classes.searchbar} bg="white">
          <Grid.Col span={{ base: 4 }}>
            <TextInput
              ref={inputRef}
              onFocus={() => navigate('/search-results')}
              variant="unstyled"
              leftSection={<IconSearch />}
              placeholder="Search for artists, events and funs"
              className={classes.borderRight}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 3 }}>
            <Select
              variant="unstyled"
              placeholder="Genres"
              data={CATEGORIES.map((c) => c.name)}
              pl="md"
              className={classes.borderRight}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 3 }}>
            <Select
              placeholder="Location"
              data={['Yangon', 'Mandalay', 'Taunggyi']}
              variant="unstyled"
              pl="md"
              // className={classes.borderRight}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 2 }}>
            <Button radius="sm" fullWidth>
              Search
            </Button>
          </Grid.Col>
        </Grid>

        <Grid gutter="md" className={classes.mobileSearchbar}>
          <Grid.Col span={{ base: 12 }}>
            <Select placeholder="Genres" data={CATEGORIES.map((c) => c.name)} />
          </Grid.Col>

          <Grid.Col span={{ base: 12 }}>
            <Select
              placeholder="Location"
              data={['Yangon', 'Mandalay', 'Taunggyi']}
            />
          </Grid.Col>

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
    </Stack>
  );
}
