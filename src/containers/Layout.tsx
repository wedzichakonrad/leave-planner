import { Outlet, useLocation } from 'react-router';
import Navigation from '../components/Navigation/Navigation';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { routes } from '../utils/routes';

const Layout = () => {
  const theme = useTheme();
  const location = useLocation();

  const isLogging = location.pathname.includes(routes.login.path);

  return (
    <Stack
      direction="row"
      sx={{ background: theme.palette.grey[100], height: '100vh' }}
    >
      {!isLogging && <Navigation />}
      <Container maxWidth={'xl'} sx={{ py: 5 }}>
        <Outlet />
      </Container>
    </Stack>
  );
};

export default Layout;
