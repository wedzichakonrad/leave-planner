import { createBrowserRouter } from 'react-router';
import Layout from '../containers/Layout';
import Dashboard from '../containers/Dashboard/Dashboard';
import LeaveBoard from '../containers/LeaveBoard/LeaveBoard';
import Insights from '../containers/Insights/Insights';
import { routes } from './routes';
import Login from '../containers/Login/Login';

export const router = createBrowserRouter([
  {
    path: routes.dashboard.path,
    element: <Layout />,
    errorElement: 'ERROR SITE',
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: routes.calendar.path,
        element: <LeaveBoard />,
      },
      {
        path: routes.insights.path,
        element: <Insights />,
      },
      {
        path: routes.login.path,
        element: <Login />,
      },
    ],
  },
]);
