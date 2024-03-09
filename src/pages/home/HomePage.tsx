import { Space } from '@mantine/core';
import birdLottie from '@assets/images/lottie/bird.json';
import fireLottie from '@assets/images/lottie/fire.json';
import rocketLottie from '@assets/images/lottie/rocket.json';
import { BannerCarosal, ItemCarosel, LatestItem } from '@components/common';
import { CONTENT_SPACING } from '@config/const';
import { usePermission } from '@hooks/usePermission';
import { Categories, Features } from './components';
import {
  useGetComingSoonEvents,
  useGetEarlyAccessEvents,
  useGetTrendingEvents,
} from './queries';
// import { SearchBar } from '../../layouts/components';

export function HomePage() {
  const { isAuthedUser } = usePermission();

  const { data: trendings, isLoading: trendingLoading } = useGetTrendingEvents({
    size: 6,
  });

  const { data: earlyaccess, isLoading: earlyaccessLoading } =
    useGetEarlyAccessEvents({ size: 6 });

  const { data: comingSoon, isLoading: comingSoonLoading } =
    useGetComingSoonEvents({ size: 6 });

  return (
    <>
      <Space h={CONTENT_SPACING} />

      {/* <SearchBar /> */}

      <Space h="md" />

      <Categories />

      <Space h={CONTENT_SPACING} />

      <BannerCarosal />

      {isAuthedUser && (
        <>
          <Space h={CONTENT_SPACING} />
          <ItemCarosel
            title="Coming Soon"
            data={comingSoon?.data.content}
            lottieGif={rocketLottie}
            isLoading={comingSoonLoading}
          />
        </>
      )}

      <Space h={CONTENT_SPACING} />

      <ItemCarosel
        title="Trending"
        data={trendings?.data.content}
        lottieGif={fireLottie}
        isLoading={trendingLoading}
      />

      <Space h={CONTENT_SPACING} />

      <ItemCarosel
        title="Early Access"
        data={earlyaccess?.data.content}
        lottieGif={birdLottie}
        isLoading={earlyaccessLoading}
      />

      <Space h={CONTENT_SPACING} />

      <Features />

      <Space h={CONTENT_SPACING} />

      <LatestItem />

      <Space h={CONTENT_SPACING} />
    </>
  );
}
