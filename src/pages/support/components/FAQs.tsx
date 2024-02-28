import { Grid, Space, Stack, Title } from '@mantine/core';
import { faqs } from '@config/faqs';
import { useDivideArray } from '@hooks/useDivideArray';
import { FAQItem } from './FAQItem';

export function FAQs() {
  const { firstHalf, secondHalf } = useDivideArray(faqs);

  return (
    <>
      <Grid>
        <Grid.Col span={{ xs: 12 }}>
          <Title order={4}>FAQs</Title>
        </Grid.Col>

        <Grid.Col span={{ xs: 12, md: 6 }}>
          <Stack gap="sm">
            {firstHalf.map((faq) => (
              <FAQItem key={faq.id} question={faq.q} answer={faq.a} />
            ))}
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ xs: 12, md: 6 }}>
          <Stack gap="sm">
            {secondHalf.map((faq) => (
              <FAQItem key={faq.id} question={faq.q} answer={faq.a} />
            ))}
          </Stack>
        </Grid.Col>
      </Grid>

      <Space h={60} />
    </>
  );
}
