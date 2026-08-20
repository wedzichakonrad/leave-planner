import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';

export const routes = {
  dashboard: {
    path: '/',
    label: 'Dashboard',
    icon: HomeIcon,
  },
  calendar: {
    path: '/calendar',
    label: 'Calendar',
    icon: EventIcon,
  },
  insights: {
    path: '/insights',
    label: 'Insights',
    icon: BarChartIcon,
  },
  login: {
    path: '/login',
    label: 'Log-out',
    icon: LogoutIcon,
  },
};
