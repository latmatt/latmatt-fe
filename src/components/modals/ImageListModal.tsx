import { useState } from 'react';
import { ActionIcon, Box, Center, Group, Image } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';

interface Props {
  imgList: string[];
  selectedImgIdx: number;
}

export function ImageListModal({ imgList, selectedImgIdx }: Props) {
  const [currentIdx, setCurrentIdx] = useState<number>(selectedImgIdx);

  const handleNext = () => {
    if (currentIdx === imgList.length - 1) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx === 0) {
      setCurrentIdx(imgList.length - 1);
    } else {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  return (
    <Center>
      <Group w="100%">
        <ActionIcon onClick={handlePrev} variant="outline">
          <IconChevronLeft />
        </ActionIcon>

        <Box style={{ flex: 1 }}>
          <Image
            my="lg"
            radius="md"
            fit="contain"
            h="80vh"
            src={imgList[currentIdx]}
          />
        </Box>

        <ActionIcon onClick={handleNext} variant="outline">
          <IconChevronRight />
        </ActionIcon>
      </Group>
    </Center>
  );
}
