import { ReactNode, cloneElement } from 'react';
import { Box, Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './style.module.css';

interface Props {
  header: any;
  body: ReactNode;
}

export function LatMatCollapse({ header, body }: Props) {
  const [opened, { toggle }] = useDisclosure(false);

  const newHeader = cloneElement(header, {
    isExpended: opened,
  });

  return (
    <Box className={classes.collapse}>
      <Box onClick={toggle}>{newHeader}</Box>

      <Collapse in={opened}>{body}</Collapse>
    </Box>
  );
}
