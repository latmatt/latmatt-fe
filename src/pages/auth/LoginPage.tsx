import { Tabs, Center, BackgroundImage, Paper, Grid } from '@mantine/core';
import AUTH_BG from '@assets/images/common/auth-bg.png';
import { AUTH_TABS } from '@config/const';
import { useAuthRoute } from '@hooks/useAuth';
import { LoginForm, SignupForm } from './components';
import classes from './styles.module.css';

export function LoginPage() {
  useAuthRoute();

  return (
    <BackgroundImage src={AUTH_BG}>
      <Center h="100vh" maw="100%">
        <Grid justify="center" w="100%">
          <Grid.Col
            span={{
              md: 4,
              sm: 8,
              xs: 12,
            }}
          >
            <Paper radius="md" className={classes.wrapper}>
              <Tabs radius={0} variant="pills" defaultValue={AUTH_TABS[1]}>
                <Tabs.List grow className={classes.tabList}>
                  {AUTH_TABS.map((tab) => (
                    <Tabs.Tab fw="bold" h={50} key={tab} value={tab}>
                      {tab}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>

                <Tabs.Panel
                  className={classes.tabPanel}
                  value={AUTH_TABS[0]}
                  pt="xs"
                >
                  <SignupForm />
                </Tabs.Panel>

                <Tabs.Panel
                  className={classes.tabPanel}
                  value={AUTH_TABS[1]}
                  pt="xs"
                >
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
