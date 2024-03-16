import { Box, Center, Image, Stack, Text } from '@mantine/core';
import NoresultImage from '@assets/images/svg/no-result.svg';

interface Props {
  text: string;
}

export function NoResult({ text }: Props) {
  return (
    <Center w="100%" h={400}>
      <Stack align="center" gap="lg">
        <Box>
          <Image w={200} h={200} src={NoresultImage} />
        </Box>

        <Text fw="bold">{text}</Text>
      </Stack>
    </Center>
  );
}
