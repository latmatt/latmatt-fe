import { useState } from 'react';
import { Space } from '@mantine/core';
import { useParams } from 'react-router-dom';
import fireLottie from '@assets/images/lottie/fire.json';
import rocketLottie from '@assets/images/lottie/rocket.json';
import {
  BannerCarosal,
  ItemCarosel,
  ItemPangination,
} from '@components/common';
import { CONTENT_SPACING } from '@config/const';
import { ConcertTypes } from './components';
import {
  useGetComingSoonEventsByCategory,
  useGetEventTypes,
  useGetEventsByCategory,
  // useGetGenres,
  useGetTrendingEventsByCategory,
} from './queries';

export function CategoryDetailPage() {
  const [eventActivePage, setEventActivePage] = useState<number>(0);
  const { id } = useParams();

  const { data: eventTypes, isLoading: eventTypeLoading } = useGetEventTypes();

  const { data: comingSoon, isLoading: comingSoonLoading } =
    useGetComingSoonEventsByCategory({ size: 6 }, id || '');

  const { data: trendings, isLoading: trendingLoading } =
    useGetTrendingEventsByCategory(
      {
        size: 6,
      },
      id || ''
    );

  // const { data: genres, isLoading: genresLoading } = useGetGenres();

  const { data: events, isLoading: eventLoading } = useGetEventsByCategory({
    size: 4,
    page: eventActivePage,
    eventTypeId: id,
  });

  const handleEventPageChange = (page: number) => {
    setEventActivePage(page);
  };

  return (
    <>
      <Space h={CONTENT_SPACING} />

      <ConcertTypes data={eventTypes?.data.data} isLoading={eventTypeLoading} />

      <Space h={CONTENT_SPACING} />

      <ItemCarosel
        title="Coming Soon"
        data={comingSoon?.data.content}
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

      <ItemPangination
        data={events?.data.content}
        isLoading={eventLoading}
        activePage={
          eventActivePage === 0 && events?.data.first ? 1 : eventActivePage
        }
        setPage={handleEventPageChange}
        totalPages={events?.data.totalPages}
      />

      <Space h={CONTENT_SPACING} />
    </>
  );
}
