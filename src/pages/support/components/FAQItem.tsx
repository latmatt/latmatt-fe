import {
  Box,
  Card,
  Collapse,
  Divider,
  Group,
  Space,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons';
import classes from './style.module.css';

interface Props {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: Props) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Card withBorder onClick={toggle} className={classes.faqContainer}>
      <Group justify="space-between">
        <Text>{question}</Text>

        <Box className={classes.faqIcon}>
          <IconPlus color="white" size={20} />
        </Box>
      </Group>

      <Collapse in={opened}>
        <Space h="md" />
        <Divider />
        <Text mt="xs">{answer}</Text>
      </Collapse>
    </Card>
  );
}
