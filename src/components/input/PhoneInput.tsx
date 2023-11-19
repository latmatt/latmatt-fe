import { Box, TextInputProps, Text, TextInput } from '@mantine/core';
import classes from './styles.module.css';

function Icon() {
  return (
    <Box className={classes.phoneInputIcon}>
      <Text mx="xs" c="black" className={classes.phoneInputIconText}>
        +95
      </Text>
    </Box>
  );
}

export function PhoneInput(props: TextInputProps) {
  return <TextInput leftSection={<Icon />} leftSectionWidth={60} {...props} />;
}
