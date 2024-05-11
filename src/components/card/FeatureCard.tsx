import { useState } from 'react';
import { Card, Image, Text, Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface Props {
  name: string;
  icon: string;
  description: string;
}

export function FeatureCard({ name, icon, description }: Props) {
  const matches = useMediaQuery('(max-width: 56.25em)');
  const [isExpended, setIsExpended] = useState<boolean>(false);

  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Card.Section>
        <Center
          h={{
            base: 100,
            md: 200,
          }}
        >
          <Image src={icon} height={60} alt="Norway" />
        </Center>
      </Card.Section>

      <Text fw="bold" c="primary.6" ta="center" mb="lg">
        {name}
      </Text>

      {matches ? (
        isExpended ? (
          <>
            <Text ta="center">{description}</Text>

            <Text
              ta="center"
              td="underline"
              onClick={() => setIsExpended((prev) => !prev)}
            >
              See less
            </Text>
          </>
        ) : (
          <Text
            ta="center"
            td="underline"
            onClick={() => setIsExpended((prev) => !prev)}
          >
            See more
          </Text>
        )
      ) : (
        <Text ta="center">{description}</Text>
      )}
    </Card>
  );
}
