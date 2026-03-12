import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const Calendar = () => {
  const [events, setEvents] = useState({});
  const addEvent = (date) => {
    console.log(date);
    setEvents((cl) => ({
      ...cl,
      [date.dateStr]: [...(cl?.[date.dateStr] ? cl[date.dateStr] : []), 'Event'],
    }));
  };

  console.log(events)

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={addEvent}
      // dayCellContent={(arg) => {

      //   const isoDate = arg.date.toISOString().split('T')[0];

      //   return (
      //     <Stack sx={{ height: '100%' }}>
      //       <Typography>{arg.dayNumberText}</Typography>

      //       <Stack>
      //         {events?.[isoDate]?.[0]}
      //       </Stack>
      //     </Stack>
      //   );
      // }}
    />
  );
};
