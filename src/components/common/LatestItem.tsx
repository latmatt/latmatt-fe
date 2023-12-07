import { useEffect, useRef, useState } from 'react';
import { Button, Card, Group, Text, Image, Stack, Box } from '@mantine/core';
import { IconCircleChevronRight } from '@tabler/icons';
import { LAYOUT_PADDING } from '@config/const';
import classes from './styles.module.css';

export function LatestItem() {
  const wrapper = useRef<any>(null);
  const floating = useRef<any>(null);

  const [isFloating, setIsFloating] = useState<boolean>(true);

  const handleScroll = () => {
    if (floating.current && wrapper.current) {
      const wrapperPositionY = wrapper.current.getBoundingClientRect().top;
      const floatingPositionY = floating.current.getBoundingClientRect().top;

      if (wrapperPositionY <= floatingPositionY) {
        setIsFloating(false);
      } else {
        setIsFloating(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box ref={wrapper} className={classes.floatingWrapper} w="100%">
      {/* A ref to compare with wrapperPositionY */}
      <div ref={floating} className={classes.floatingItem} />

      <Box
        className={
          isFloating ? classes.floatingItem : classes.stoppedFloatingItem
        }
        w="100%"
        px={isFloating ? LAYOUT_PADDING : 0}
      >
        <Card w="100%" shadow="sm" padding="sm" radius="md" withBorder>
          <Group justify="space-between">
            <Group>
              <Image
                w={100}
                h={80}
                fit="cover"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
              />
              <Stack gap={0}>
                <Text fw="bold">Hello</Text>
                <Text>Hello</Text>
              </Stack>
            </Group>

            <Button rightSection={<IconCircleChevronRight />}>Continue</Button>
          </Group>
        </Card>
      </Box>
    </Box>
  );
}
