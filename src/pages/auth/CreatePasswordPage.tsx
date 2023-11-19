import { Center, BackgroundImage, Paper, Grid } from '@mantine/core';
import AUTH_BG from '@assets/images/common/auth-bg.png';
import { useAuthRoute } from '@hooks/useAuth';
import { CreatePasswordForm } from './components';
import classes from './styles.module.css';

export function CreatePasswordPage() {
  useAuthRoute();

  return (
    <BackgroundImage src={AUTH_BG}>
      <Center h="100vh" w="100%">
        <Grid justify="center" w="100%">
          <Grid.Col
            span={{
              md: 4,
              sm: 8,
              xs: 12,
            }}
          >
            <Paper className={classes.wrapper}>
              <Center w="100%" h="100%">
                <CreatePasswordForm />
              </Center>
            </Paper>
          </Grid.Col>
        </Grid>
      </Center>
    </BackgroundImage>
  );
}
