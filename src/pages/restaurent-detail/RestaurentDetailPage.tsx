import { Space } from '@mantine/core';
import { RestaurentCardCarousel } from '@components/carousels';
import { BannerCarosal } from '@components/common';
import { CONTENT_SPACING } from '@config/const';

export function RestaurentDetailPage() {
  return (
    <>
      <RestaurentCardCarousel title="Coming Soon" />

      <RestaurentCardCarousel title="Most booked" />

      <Space h={CONTENT_SPACING} />

      <BannerCarosal />

      <Space h={CONTENT_SPACING} />
    </>
  );
}
