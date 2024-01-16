import { Text, Card, Stack, Image } from '@mantine/core';

interface Props {
  data: EventNotice;
}

export function EventInfoCard({ data }: Props) {
  return (
    <Card>
      <Stack gap="sm" align="center" mih={200}>
        <Image src={data.iconUrl} w={60} />

        <Text ta="center" fw="bold">
          {data.title}
        </Text>

        <Text ta="center">{data.description}</Text>
      </Stack>
    </Card>
  );
}
