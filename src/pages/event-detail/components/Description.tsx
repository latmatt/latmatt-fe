/* eslint-disable react/no-danger */
import { Carousel } from '@mantine/carousel';
import { Box, Card, Flex, Grid, Image, Space, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './style.module.css';
import { TicketCenter } from './TicketCenter';

interface Props {
  data: Event;
}

export function Description({ data }: Props) {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Card radius="sm" bg="white" p="md">
          <div
            dangerouslySetInnerHTML={{ __html: data.information as string }}
          />

          {data.socialMedia && data.socialMedia?.length > 0 && (
            <>
              <Text fw="bold" fz="lg">
                Follow Us on Social Media
              </Text>
              <Flex
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
              >
                {data.socialMedia?.map((media) => (
                  <Link key={media.id} to={media.link}>
                    <Box w={30} h={30}>
                      <Image src={media.icon_url} />
                    </Box>
                  </Link>
                ))}
              </Flex>
            </>
          )}

          <Space h="lg" />

          {data.tags && data.tags?.length > 0 && (
            <>
              <Text fw="bold" fz="lg">
                Tags
              </Text>
              <Flex
                gap="xs"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
              >
                {data.tags?.map((tag) => (
                  <Box key={tag.id} bg="blue.3" px="sm" className={classes.tag}>
                    <Text c="white">{tag.text}</Text>
                  </Box>
                ))}
              </Flex>
            </>
          )}
        </Card>

        <Space h="lg" />

        {data.artists && data.artists?.length > 0 && (
          <Carousel
            // withIndicators
            height={200}
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"
          >
            {data.artists.map((artist) => (
              <Carousel.Slide key={artist.id}>
                <Box w="100%">
                  <Image
                    w="100%"
                    h={200}
                    radius="md"
                    fit="cover"
                    src={artist.profileImage}
                  />
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <TicketCenter data={data.eventDetails[0]} />
      </Grid.Col>
    </Grid>
  );
}
