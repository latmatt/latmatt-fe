import {
  Center,
  BackgroundImage,
  Paper,
  Grid,
  createStyles,
} from '@mantine/core';
import AUTH_BG from '@assets/images/common/auth-bg.png';
import { useAuthRoute } from '@hooks/useAuth';
import { CreatePasswordForm } from './components';

const useStyles = createStyles((theme) => ({
  paper: {
    overflow: 'hidden',
    width: '100%',
    [theme.fn.smallerThan('sm')]: {
      height: '100vh',
      width: '100vw',
      marginLeft: -8,
    },
  },
}));

export function CreatePasswordPage() {
  useAuthRoute();

  const { classes } = useStyles();

  return (
    <BackgroundImage src={AUTH_BG}>
      <Center h="100vh" w="100%">
        <Grid justify="center" w="100%">
          <Grid.Col md={4} sm={8} xs={12}>
            <Paper radius="md" className={classes.paper}>
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
