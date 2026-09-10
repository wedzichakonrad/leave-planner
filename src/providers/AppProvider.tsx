import React, { useState } from 'react';
import { AppContext } from '../context/AppContext';
import type { ModalData } from '../utils/types';

interface AppProviderProps {
  children: React.ReactNode;
}

type CalendarEvent = {
  starts_at: string;
  ends_at: string;
  type: string;
  description: string;
};

// TODO zrobić żeby sie dodawało do kalendarza, narazie wystarczy do contextu
// dodać pickery do storybooka
// ogarnąc modal
// zacząc reduxa

export interface AppContextType {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: ModalData;
  setModalData: React.Dispatch<React.SetStateAction<ModalData>>;
  calendarEvents: CalendarEvent;
  setCalendarEvents: React.Dispatch<React.SetStateAction<CalendarEvent>>;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>(null);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);

  const value = {
    drawerOpen,
    setDrawerOpen,
    modalData,
    setModalData,
    calendarEvents,
    setCalendarEvents,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
