import React, { useState } from 'react';
import { AppContext } from '../context/AppContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export interface AppContextType {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
