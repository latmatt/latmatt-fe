import { Grid } from '@mantine/core';
import { FeatureCard } from '@components/card';
import { FEATURES } from '@config/mocks';

export function Features() {
  return (
    <Grid>
      {FEATURES.map((fe) => (
        <Grid.Col key={fe.name} span={{ base: 6, md: 3 }}>
          <FeatureCard
            name={fe.name}
            description={fe.description}
            icon={fe.icon}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}
