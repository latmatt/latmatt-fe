import {
  Tabs,
  Center,
  BackgroundImage,
  Paper,
  Grid,
  createStyles,
} from '@mantine/core';
import AUTH_BG from '@assets/images/common/auth-bg.png';
import { AUTH_TABS } from '@config/const';
import { useAuthRoute } from '@hooks/useAuth';
import { LoginForm, SignupForm } from './components';

const useStyles = createStyles((theme) => ({
  paper: {
    overflow: 'hidden',
    width: '100%',
    height: 'auto',
    [theme.fn.smallerThan('sm')]: {
      height: '100vh',
      width: '100vw',
      marginLeft: -8,
    },
  },
}));

export function LoginPage() {
  useAuthRoute();

  const { classes } = useStyles();

  return (
    <BackgroundImage src={AUTH_BG}>
      <Center h="100vh" w="100%">
        <Grid justify="center" w="100%">
          <Grid.Col md={4} sm={8} xs={12}>
            <Paper radius="md" className={classes.paper}>
              <Tabs radius={0} variant="pills" defaultValue={AUTH_TABS[0]}>
                <Tabs.List grow>
                  {AUTH_TABS.map((tab) => (
                    <Tabs.Tab fw="bold" h={50} key={tab} value={tab}>
                      {tab}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>

                <Tabs.Panel value={AUTH_TABS[0]} pt="xs">
                  <SignupForm />
                </Tabs.Panel>

                <Tabs.Panel value={AUTH_TABS[1]} pt="xs">
                  <LoginForm />
                </Tabs.Panel>
              </Tabs>
            </Paper>
          </Grid.Col>
        </Grid>
      </Center>
    </BackgroundImage>
  );
}
