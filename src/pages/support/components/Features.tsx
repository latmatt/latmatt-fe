import { Box, Center, Grid, Text, Image, Stack } from '@mantine/core';
import { features } from '@config/features';

export function Features() {
  return (
    <Grid my={70}>
      {features.map((feature) => (
        <Grid.Col key={feature.id} span={{ md: 3 }}>
          <Center>
            <Stack>
              <Box>
                <Image src={feature.icon} h={50} fit="contain" />
              </Box>
              <Text fw="bold">{feature.name}</Text>
            </Stack>
          </Center>
        </Grid.Col>
      ))}
    </Grid>
  );
}
