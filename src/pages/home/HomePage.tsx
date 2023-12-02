import { Space } from '@mantine/core';
import { CONTENT_SPACING } from '@config/const';
import {
  Announcements,
  Categories,
  EarlyAccess,
  Features,
  SearchBar,
  Trending,
} from './components';

export function HomePage() {
  return (
    <>
      <Space h={CONTENT_SPACING} />

      <SearchBar />

      <Space h="md" />

      <Categories />

      <Space h={CONTENT_SPACING} />

      <Announcements />

      <Space h={CONTENT_SPACING} />

      <Trending />

      <Space h={CONTENT_SPACING} />

      <EarlyAccess />

      <Space h={CONTENT_SPACING} />

      <Features />

      <Space h={CONTENT_SPACING} />
    </>
  );
}
