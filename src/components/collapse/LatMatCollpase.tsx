import { ReactNode, cloneElement } from 'react';
import { Box, Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './style.module.css';

interface Props {
  header: any;
  body: ReactNode;
  expended?: boolean;
  disable?: boolean;
}

export function LatMatCollapse({
  header,
  body,
  expended = false,
  disable = false,
}: Props) {
  const [opened, { toggle }] = useDisclosure(expended);

  const newHeader = cloneElement(header, {
    isExpended: opened,
  });

  return (
    <Box className={classes.collapse}>
      <Box
        onClick={() => {
          if (!disable) {
            toggle();
          }
        }}
      >
        {newHeader}
      </Box>

      <Collapse in={opened}>{body}</Collapse>
    </Box>
  );
}
