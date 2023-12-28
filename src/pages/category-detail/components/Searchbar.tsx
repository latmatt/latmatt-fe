import {
  BackgroundImage,
  Box,
  Button,
  Grid,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useParams } from 'react-router-dom';
import { LAYOUT_PADDING } from '@config/const';
import classes from './styles.module.css';

export function Searchbar() {
  const { id } = useParams();

  const getBgImgUrl = (): string => {
    let url =
      'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg';

    if (id === 'concert') {
      url =
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg';
    }

    if (id === 'art') {
      url = 'https://media.timeout.com/images/105795964/750/422/image.jpg';
    }

    if (id === 'sport') {
      url =
        'https://wearecardinals.com/wp-content/uploads/2020/04/u1Re9qgMfM8d6kumlW85PS6s55jQh5fbdmppgQsP.jpeg';
    }

    if (id === 'fun') {
      url =
        'https://cdn.tinybuddha.com/wp-content/uploads/2014/09/Friends-Having-Fun.png';
    }

    if (id === 'night') {
      url =
        'https://thepourhousempls.com/wp-content/uploads/2023/09/what-to-drink-on-a-night-out.jpg';
    }

    if (id === 'fine dining') {
      url =
        'https://static.vinwonders.com/production/Fine-dining-in-Hanoi-banner.jpg';
    }

    return url;
  };

  return (
    <BackgroundImage h={300} px={LAYOUT_PADDING} src={getBgImgUrl()}>
      <Stack justify="center" w="100%" h="100%">
        <Box w="100%">
          <form>
            <Grid gutter={0} className={classes.searchbar} bg="white">
              <Grid.Col span={{ base: 12, md: 7 }}>
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

              <Grid.Col span={{ base: 12, md: 2 }}>
                <Button radius={0} fullWidth>
                  Search
                </Button>
              </Grid.Col>
            </Grid>

            <Grid gutter="md" className={classes.mobileSearchbar}>
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
        </Box>
      </Stack>
    </BackgroundImage>
  );
}
