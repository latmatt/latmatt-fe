import { useState } from 'react';
import { Space } from '@mantine/core';
import fireLottie from '@assets/images/lottie/fire.json';
import rocketLottie from '@assets/images/lottie/rocket.json';
import { BannerCarosal, ItemPangination } from '@components/common';
import { CONTENT_SPACING } from '@config/const';
import { ItemCarosel } from '@pages/home/components';
import { useGetComingSoonEvents } from '@pages/home/queries';
import { ConcertTypes } from './components';
import {
  useGetEventsByCategory,
  useGetGenres,
  useGetTrendingEventsByCategory,
} from './queries';

export function CategoryDetailPage() {
  const [eventActivePage, setEventActivePage] = useState<number>(0);

  const { data: comingSoon, isLoading: comingSoonLoading } =
    useGetComingSoonEvents({ size: 6 });

  const { data: trendings, isLoading: trendingLoading } =
    useGetTrendingEventsByCategory({
      size: 6,
    });

  const { data: genres, isLoading: genresLoading } = useGetGenres();

  // const { data: events, isLoading: eventLoading } = useGetEventsByCategory({
  //   size: 12,
  //   page: eventActivePage,
  // });

  // const handleEventPageChange = (page: number) => {
  //   setEventActivePage(page);
  // };

  return (
    <>
      <Space h={CONTENT_SPACING} />

      <ConcertTypes data={genres?.data.data} isLoading={genresLoading} />

      <Space h={CONTENT_SPACING} />

      <ItemCarosel
        title="Coming Soon"
        data={comingSoon?.data.data}
        lottieGif={rocketLottie}
        isLoading={comingSoonLoading}
      />

      <Space h={CONTENT_SPACING} />

      <ItemCarosel
        title="Trending Now"
        data={trendings?.data.content}
        lottieGif={fireLottie}
        isLoading={trendingLoading}
      />

      <Space h={CONTENT_SPACING} />

      <BannerCarosal />

      <Space h={CONTENT_SPACING} />

      {/* <ItemPangination
        data={events?.data.content}
        isLoading={eventLoading}
        activePage={eventActivePage}
        setPage={handleEventPageChange}
      /> */}

      <Space h={CONTENT_SPACING} />
    </>
  );
}
