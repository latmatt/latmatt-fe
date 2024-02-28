import { Grid, Button, Text, Space, Title, Flex, Stack } from '@mantine/core';

export function ContactUs() {
  return (
    <>
      <Space h={60} />

      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'space-between' }}
      >
        <Stack>
          <Title order={5}>Do you need real time support?</Title>

          <Button>Contact Us</Button>
        </Stack>

        <Button>Button 3</Button>
      </Flex>

      <Space h={60} />
    </>
  );
}
