import { Space } from '@mantine/core';
import { LatestItem } from '@components/common';
import { CONTENT_SPACING } from '@config/const';
import { usePermission } from '@hooks/usePermission';
import {
  Announcements,
  Categories,
  ComingSoon,
  EarlyAccess,
  Features,
  SearchBar,
  Trending,
} from './components';

export function HomePage() {
  const { isAuthedUser } = usePermission();

  return (
    <>
      <Space h={CONTENT_SPACING} />

      <SearchBar />

      <Space h="md" />

      <Categories />

      <Space h={CONTENT_SPACING} />

      <Announcements />

      <Space h={CONTENT_SPACING} />

      {isAuthedUser && <ComingSoon />}

      <Space h={CONTENT_SPACING} />

      <Trending />

      <Space h={CONTENT_SPACING} />

      <EarlyAccess />

      <Space h={CONTENT_SPACING} />

      <Features />

      <Space h={CONTENT_SPACING} />

      <LatestItem />

      <Space h={CONTENT_SPACING} />
    </>
  );
}
