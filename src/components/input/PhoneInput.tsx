import { Box, TextInput, TextInputProps, Text } from '@mantine/core';

function Icon() {
  return (
    <Box
      sx={{
        borderRightWidth: 1,
        borderRight: 'solid',
      }}
      mr="xs"
    >
      <Text mx="xs">+95</Text>
    </Box>
  );
}

export function PhoneInput(props: TextInputProps) {
  return (
    <TextInput
      label={props.label}
      placeholder={props.placeholder}
      icon={<Icon />}
      iconWidth={55}
      {...props}
    />
  );
}
