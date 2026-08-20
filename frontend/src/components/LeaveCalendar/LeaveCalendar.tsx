import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {
  type DateClickArg,
} from '@fullcalendar/interaction';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { EventCard } from '../EventCard/EventCard';
import RequestLeaveModal, {
  requestLeaveModalId,
} from '../RequestLeaveModal/RequestLeaveModal';
import { useApp } from '../../hooks/useApp';
import { isWithinInterval, startOfDay, endOfDay } from 'date-fns';
import { Button } from '@mui/material';

export type CalendarEvent = {
  [key: string]: string[];
};

export const LeaveCalendar = () => {
  const { setModalData, calendarEvents } = useApp();

  const addEvent = (e: DateClickArg) => {
    setModalData({ [requestLeaveModalId]: { start_time: e.date } });
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dayCellContent={(arg) => {
          return (
            <Stack
              sx={{
                height: '100%',
                width: '100%',
                '.MuiButtonBase-root ': {
                  display: 'none',
                },
                '&:hover': {
                  '.MuiButtonBase-root ': {
                    display: 'block',
                  },
                },
              }}
              gap={1}
            >
              <Typography>{arg.dayNumberText}</Typography>
              <Button variant="contained" onClick={() => addEvent(arg)}>
                + Add Event
              </Button>

              {calendarEvents.map((event, index) => {
                const startDate = new Date(event.starts_at);
                const endDate = new Date(event.ends_at);

                const isMatch = isWithinInterval(arg.date, {
                  start: startOfDay(startDate),
                  end: endOfDay(endDate),
                });
                if (isMatch) {
                  return (
                    <EventCard
                      item={event}
                      key={index}
                      onClick={() =>
                        setModalData({
                          [requestLeaveModalId]: {
                            start_time: event.starts_at,
                            end_time: event.ends_at,
                            request_type: event.type,
                            extra_notes: event.description,
                          },
                        })
                      }
                    />
                  );
                }

                return null;
              })}
            </Stack>
          );
        }}
      />
      <RequestLeaveModal />
    </>
  );
};
