import { Card, Grid, Title, Image } from '@mantine/core';

export function Menus() {
  return (
    <Card withBorder>
      <Grid>
        <Grid.Col span={12}>
          <Title order={5}>Menus</Title>
        </Grid.Col>

        <Grid.Col
          span={{
            xs: 6,
            md: 4,
          }}
        >
          <Image
            radius="md"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          />
        </Grid.Col>

        <Grid.Col
          span={{
            xs: 6,
            md: 4,
          }}
        >
          <Image
            radius="md"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          />
        </Grid.Col>

        <Grid.Col
          span={{
            xs: 6,
            md: 4,
          }}
        >
          <Image
            radius="md"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}
