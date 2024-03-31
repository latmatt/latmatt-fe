import { Card, Title, Text, Image } from '@mantine/core';
import { ProfileTitle } from './ProfileTitle';

export function Profile() {
  return (
    <Card withBorder>
      <ProfileTitle />

      <Image
        my="lg"
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      />

      <Title order={6}>Description</Title>

      <Text>
        Koji Sushi Bar is a trendy and casual Japanese sushi and sashimi-only
        joint with a simple menu focusing on quality fresh sea produce and with
        speed and affordability in the day to cater to office crowd. In the
        evening, Omakase (chef decide) menu is served along with a good
        selection of sake and shochu for a relaxed dining experience.
      </Text>
    </Card>
  );
}
