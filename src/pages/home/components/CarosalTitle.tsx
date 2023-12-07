import { Flex, Box, Title } from '@mantine/core';
import Lottie from 'lottie-react';
import classes from './style.module.css';

interface Props {
  title: string;
  lottie: Record<string, unknown>;
}

export function CarosalTitle({ title, lottie }: Props) {
  return (
    <Flex justify="center" align="center" direction="row" gap={0}>
      <Box w={{ base: 70, md: 90 }}>
        <Lottie animationData={lottie} loop />
      </Box>
      <Title order={5} ta="center">
        {title}
      </Title>
      <Box w={{ base: 70, md: 90 }} className={classes.flip}>
        <Lottie animationData={lottie} loop />
      </Box>
    </Flex>
  );
}
