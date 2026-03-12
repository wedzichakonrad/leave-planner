import { createContext } from 'react';
import type { AppContextType } from '../providers/AppProvider';

export const AppContext = createContext<AppContextType | undefined>(undefined);