import { Card, Group, Space, Stack, Text } from '@mantine/core';
import { EventHorizontalCard, PeopleCard } from '@components/card';
import { CONTENT_SPACING } from '@config/const';
import { ResultTitle } from './components';
// import { NoResult } from './components/NoResult';

export function SearchResultPage() {
  return (
    <>
      {/* <NoResult
        text={
          'We\'re sorry but we couldn\'t find any result for "cccc". Please try different keywords.'
        }
      /> */}

      <Text fw="bold" my="md">
        10 results for water
      </Text>

      <Card withBorder>
        <Stack>
          <ResultTitle title="Organizers/Artists" />
          <Group mt="md" gap="lg">
            <PeopleCard
              name="U Sai Min"
              img="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />

            <PeopleCard
              name="U Sai Min"
              img="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />

            <PeopleCard
              name="U Sai Min"
              img="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />
          </Group>
        </Stack>
      </Card>

      <Space h="xl" />

      <Card withBorder>
        <Stack>
          <ResultTitle title="Organizers/Artists" />
          <Group mt="md">
            <EventHorizontalCard />

            <EventHorizontalCard />

            <EventHorizontalCard />
          </Group>
        </Stack>
      </Card>

      <Space h={CONTENT_SPACING} />
    </>
  );
}
