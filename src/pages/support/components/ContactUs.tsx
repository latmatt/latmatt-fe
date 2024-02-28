import {
  Button,
  Space,
  Title,
  Flex,
  Stack,
  BackgroundImage,
  Image,
  Box,
} from '@mantine/core';
import BgImg from '@assets/images/svg/contactbg.svg';
import Content from '@assets/images/svg/contactgraphic.svg';

export function ContactUs() {
  return (
    <>
      <Space h={60} />

      <BackgroundImage src={BgImg}>
        <Flex
          direction={{ base: 'column-reverse', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'space-between' }}
          align="center"
        >
          <Stack pl="lg" gap="lg" pb={{ base: 'lg', md: 0 }}>
            <Title order={5}>Do you need real time support?</Title>

            <Box>
              <Button>Contact Us</Button>
            </Box>
          </Stack>

          <Image src={Content} height={300} />
        </Flex>
      </BackgroundImage>

      <Space h={60} />
    </>
  );
}
