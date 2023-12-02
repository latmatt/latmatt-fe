import { Card, Image, Text, Center } from '@mantine/core';

interface Props {
  name: string;
  icon: string;
  description: string;
}

export function FeatureCard({ name, icon, description }: Props) {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Card.Section>
        <Center h={200}>
          <Image src={icon} height={60} alt="Norway" />
        </Center>
      </Card.Section>

      <Text fw="bold" c="primary.6" ta="center" mb={70}>
        {name}
      </Text>

      <Text ta="center">{description}</Text>
    </Card>
  );
}
