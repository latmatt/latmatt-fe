import { Box, Grid, Group, Space, Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { LAYOUT_PADDING } from '@config/const';
import { OTHER_LINKS, QUICK_LINKS } from '@config/mocks';
import { Appstore } from './Appstore';
import { LogoWhite } from './LogoWhite';
import { Playstore } from './Playstore';
import { SocialFacebook } from './SocialFacebook';
import { SocialLinkenIn } from './SocialLinkenIn';
import { SocialX } from './SocialX';
import classes from './styles.module.css';

interface Props {
  isTransparent?: boolean;
}

export function Footer({ isTransparent = false }: Props) {
  const navigate = useNavigate();

  return (
    <>
      {!isTransparent && (
        <Box
          className={classes.footerDisplay}
          bg="primary.8"
          px={LAYOUT_PADDING}
          py="lg"
        >
          <Grid>
            <Grid.Col span={{ sm: 6, md: 3 }}>
              <Stack justify="space-between" h="100%">
                <LogoWhite w="60%" />

                <Box>
                  <Text fw="bold" fz="lg" c="neutral.0" mb="md">
                    Contact Us
                  </Text>
                  <Text fw="bold" fz="lg" c="neutral.0" mb="md">
                    +959 999 999 999
                  </Text>
                  <Text fw="bold" fz="lg" c="neutral.0" mb="md">
                    +959 666 666 666
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ sm: 6, md: 3 }}>
              <Box>
                <Text fw="bold" fz="lg" c="neutral.0" mb="md">
                  Quick Links
                </Text>

                <Stack gap="md">
                  {QUICK_LINKS.map((ql) => (
                    <Text
                      className={classes.footerLink}
                      c="neutral.0"
                      key={ql.to}
                      onClick={() => navigate(ql.to)}
                    >
                      {ql.value}
                    </Text>
                  ))}
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ sm: 6, md: 3 }}>
              <Box>
                <Text fw="bold" fz="lg" c="neutral.0" mb="md">
                  Others
                </Text>

                <Stack gap="md">
                  {OTHER_LINKS.map((ol) => (
                    <Text
                      className={classes.footerLink}
                      c="neutral.0"
                      key={ol.to}
                      onClick={() => navigate(ol.to)}
                    >
                      {ol.value}
                    </Text>
                  ))}
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ sm: 6, md: 3 }}>
              <Stack justify="space-between" h="100%">
                <Box>
                  <Text fw="bold" fz="lg" c="neutral.0" mb="md">
                    Follow us on
                  </Text>

                  <Group>
                    <SocialFacebook />
                    <SocialLinkenIn />
                    <SocialX />
                  </Group>
                </Box>

                <Box>
                  <Text fw="bold" fz="lg" c="neutral.0" mb="md">
                    Download from
                  </Text>
                  <Playstore w="60%" />
                  <Space h="md" />
                  <Appstore w="60%" />
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
        </Box>
      )}

      <Box bg={isTransparent ? 'transparent' : 'primary.9'}>
        <Text ta="center" c="white" py="sm">
          Copyright@2022 by Lattmat
        </Text>
      </Box>
    </>
  );
}
