import { Box, Group, Text, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface Props {
  label: string;
  to: string;
  icon?: string;
}

export function MobileNavbarItem({ label, to, icon }: Props) {
  const navigate = useNavigate();

  return (
    <Box px="xl" py="sm" onClick={() => navigate(to)}>
      <Group>
        <Image src={icon} />
        <Text fw="bold">{label}</Text>
      </Group>
    </Box>
  );
}
