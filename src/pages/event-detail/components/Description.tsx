import { Card, Grid, ScrollArea, Text } from '@mantine/core';
import { TicketCenter } from './TicketCenter';

export function Description() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <ScrollArea h="50vh">
          <Card radius="sm" bg="white" p="md">
            <Text fw="bold">Descrption</Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              facilisis eros a quam condimentum fringilla. Suspendisse potenti.
              Sed fringilla ante eget erat pellentesque vulputate. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Proin lacinia, neque non porttitor aliquam, nisi
              metus accumsan purus, vel imperdiet risus ligula a metus. Aenean
              efficitur viverra nulla, et laoreet magna cursus id. Pellentesque
              sagittis hendrerit aliquam. Sed sagittis tellus eu tempor mollis.
              Mauris lectus odio, efficitur in semper ac, feugiat a dolor. In ac
              faucibus lorem. Proin varius nisl vitae turpis hendrerit, ut
              elementum dolor dignissim. Nam sed elit at odio gravida congue a
              sed dui. Sed sit amet nunc elit. Vestibulum vel lorem gravida,
              hendrerit velit sit amet, ornare sapien. Sed efficitur vitae eros
              ac bibendum. Nulla pellentesque nisl odio. Donec suscipit eros
              eget nibh facilisis molestie. Suspendisse non dolor eu augue
              accumsan feugiat in nec quam. Aliquam eros nunc, fringilla ut
              ullamcorper ultrices, mollis eget nunc. Pellentesque a nisi vel
              libero vestibulum vulputate. Curabitur porttitor pulvinar ligula
              quis ullamcorper. Nullam ornare erat eget aliquam suscipit. Sed
              elementum sapien id nunc varius, vel euismod neque dapibus. Fusce
              sit amet faucibus nisl, vel laoreet ligula. Nunc sed felis elit.
              Etiam ac diam imperdiet, convallis nulla id, iaculis metus.
              Maecenas et urna neque. Nulla facilisi.
            </Text>

            <Text fw="bold">Descrption</Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              facilisis eros a quam condimentum fringilla. Suspendisse potenti.
              Sed fringilla ante eget erat pellentesque vulputate. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Proin lacinia, neque non porttitor aliquam, nisi
              metus accumsan purus, vel imperdiet risus ligula a metus. Aenean
              efficitur viverra nulla, et laoreet magna cursus id. Pellentesque
              sagittis hendrerit aliquam. Sed sagittis tellus eu tempor mollis.
              Mauris lectus odio, efficitur in semper ac, feugiat a dolor. In ac
              faucibus lorem. Proin varius nisl vitae turpis hendrerit, ut
              elementum dolor dignissim. Nam sed elit at odio gravida congue a
              sed dui. Sed sit amet nunc elit. Vestibulum vel lorem gravida,
              hendrerit velit sit amet, ornare sapien. Sed efficitur vitae eros
              ac bibendum. Nulla pellentesque nisl odio. Donec suscipit eros
              eget nibh facilisis molestie. Suspendisse non dolor eu augue
              accumsan feugiat in nec quam. Aliquam eros nunc, fringilla ut
              ullamcorper ultrices, mollis eget nunc. Pellentesque a nisi vel
              libero vestibulum vulputate. Curabitur porttitor pulvinar ligula
              quis ullamcorper. Nullam ornare erat eget aliquam suscipit. Sed
              elementum sapien id nunc varius, vel euismod neque dapibus. Fusce
              sit amet faucibus nisl, vel laoreet ligula. Nunc sed felis elit.
              Etiam ac diam imperdiet, convallis nulla id, iaculis metus.
              Maecenas et urna neque. Nulla facilisi.
            </Text>
          </Card>
        </ScrollArea>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <TicketCenter />
      </Grid.Col>
    </Grid>
  );
}
