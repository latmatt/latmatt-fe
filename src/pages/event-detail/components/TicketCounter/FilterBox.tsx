import { Box, Text } from '@mantine/core';
import classes from './style.module.css';

interface Props {
  value: string;
  isSelect: boolean;
  onSelect: () => void;
}

export function FilterBox({ value, isSelect, onSelect }: Props) {
  return (
    <Box
      className={`${classes.filterBox} ${
        isSelect ? classes.activeFilterBox : classes.inactiveFilterBox
      }`}
      onClick={onSelect}
    >
      <Text c={isSelect ? 'primary' : 'neutral'}>{value}</Text>
    </Box>
  );
}
