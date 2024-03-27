import { Space } from '@mantine/core';
import { RestaurentCard } from '@components/card';
import { RestaurentCardCarousel } from '@components/carousels';
import { BannerCarosal } from '@components/common';
import { CardLists } from '@components/lists';
import { CONTENT_SPACING } from '@config/const';

export function RestaurentDetailPage() {
  return (
    <>
      <RestaurentCardCarousel title="Coming Soon" />

      <RestaurentCardCarousel title="Most booked" />

      <Space h={CONTENT_SPACING} />

      <BannerCarosal />

      <Space h={CONTENT_SPACING} />

      <CardLists title="All Restaurents" cardCmp={<RestaurentCard />} />

      <Space h={CONTENT_SPACING} />
    </>
  );
}
