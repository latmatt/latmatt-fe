/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Box, Group, Text } from '@mantine/core';
import { IconStar } from '@tabler/icons';

export function RestaurentRating() {
  const [ratingStatusList, setRatingStatusList] = useState<
    Array<'full' | 'half' | 'zero'>
  >([]);

  useEffect(() => {
    const e = 3.5;
    const arr: Array<'full' | 'half' | 'zero'> = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      if (i < e) {
        arr.push('full');
      } else if (i + 0.5 === e) {
        arr.push('half');
      } else {
        arr.push('zero');
      }
    }

    setRatingStatusList(arr);
  }, []);

  return (
    <Group>
      <Group>
        {ratingStatusList.map((status, i) => {
          return (
            <Box key={i}>
              {status === 'full' ? (
                <IconStar color="#091AF6" fill="#091AF6" />
              ) : (
                <IconStar color="#091AF6" />
              )}
            </Box>
          );
        })}
      </Group>

      <Text>(32 reviews)</Text>
    </Group>
  );
}
