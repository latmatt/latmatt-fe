// import { useState } from 'react';
import { Button, Card, Text, Image, Box, Group } from '@mantine/core';
// import { IconChevronDown, IconChevronUp } from '@tabler/icons';
// import { LatMatCollapse } from '@components/collapse';
// import classes from './style.module.css';
// import { TicketSeats } from './TicketSeats';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: EventDetail;
}

// interface RadioBoxProps {
//   text: string;
//   isSelected: boolean;
//   onSelect: (v: string) => void;
// }

// function CollapseHeader({
//   title,
//   isExpended = false,
// }: {
//   title: string;
//   isExpended?: boolean;
// }) {
//   return (
//     <Box className={classes.collapseHeader}>
//       <Group justify="space-between">
//         <Text fw="bold">{title}</Text>

//         {!isExpended ? <IconChevronDown /> : <IconChevronUp />}
//       </Group>
//     </Box>
//   );
// }

// function RadioBox({ text, isSelected, onSelect }: RadioBoxProps) {
//   return (
//     <Box
//       className={isSelected ? classes.selectedRadioBox : classes.radioBox}
//       px="md"
//       onClick={() => onSelect(text)}
//     >
//       <Text c={isSelected ? 'primary' : 'neutral.8'}>{text}</Text>
//     </Box>
//   );
// }

export function TicketCenter({ data }: Props) {
  const navigate = useNavigate();

  // const [location, setLocation] = useState('');
  // const [date, setDate] = useState('');
  // const [seat, setSeat] = useState<TicketSeats[]>([]);

  // const getSubTotal = (): number => {
  //   let result = 0;

  //   seat.forEach((s) => {
  //     result += +s.price;
  //   });

  //   return result;
  // };

  // const handleSelectSeat = (s: TicketSeats) => {
  //   setSeat((prev) => [...prev, s]);
  // };

  // const handleRemoveSeat = (s: TicketSeats) => {
  //   setSeat((prev) => prev.filter((p) => p.name !== s.name));
  // };

  return (
    <Card bg="white" radius="sm">
      {/* <LatMatCollapse
        header={<CollapseHeader title="Event Venue" />}
        body={<Image src={data.venueMap} />}
      />

      <LatMatCollapse
        header={<CollapseHeader title="Location" />}
        body={
          <Group gap="sm" mb="md">
            <RadioBox
              onSelect={setLocation}
              text={data.location.city}
              isSelected={location === data.location.city}
            />
          </Group>
        }
      />

      <LatMatCollapse
        header={<CollapseHeader title="Date & Time" />}
        body={
          <Group gap="sm" mb="md">
            {data.eventVenues.map((e) => (
              <RadioBox
                key={e.id}
                onSelect={setDate}
                text={`${e.startDate} - ${e.endDate}`}
                isSelected={`${e.startDate} - ${e.endDate}` === date}
              />
            ))}
          </Group>
        }
      />

      <LatMatCollapse
        header={<CollapseHeader title="GA" />}
        body={
          <Box mb="md">
            <TicketSeats
              selectedSeats={seat}
              onSelect={handleSelectSeat}
              onRemove={handleRemoveSeat}
              data={data.eventVenues[0].ticketSeats}
            />
          </Box>
        }
      />

      <LatMatCollapse
        header={<CollapseHeader title="VIP" />}
        body={
          <Box mb="md">
            <TicketSeats
              selectedSeats={seat}
              onSelect={handleSelectSeat}
              onRemove={handleRemoveSeat}
              data={data.eventVenues[0].ticketSeats}
            />
          </Box>
        }
      />

      <Group justify="space-between" mt="md">
        <Text fw="bold">Subtotal</Text>

        <Text>{getSubTotal()} Ks + ( Fees + Tax )</Text>
      </Group> */}

      <Button onClick={() => navigate('/a/purchase-info')} fullWidth mt="md">
        Buy Now
      </Button>
    </Card>
  );
}
