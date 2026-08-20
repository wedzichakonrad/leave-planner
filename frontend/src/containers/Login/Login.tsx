import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import People from '@mui/icons-material/People';
import Button from '@mui/material/Button';
import { routes } from '../../utils/routes';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  
  const redirectToDashboard = () => {
    navigate(routes.dashboard.path, { replace: true });
  };

  return (
    <Stack sx={{ height: '100%' }} justifyContent="center" alignItems="center">
      <Paper elevation={4} sx={{ width: '600px' }}>
        <Stack gap={2} sx={{ p: 6 }}>
          <Stack
            direction="row"
            gap={4}
            justifyContent="center"
            alignItems="center"
          >
            <People sx={{ width: '40px', height: '40px' }} />
            <Typography>Leave Planner</Typography>
          </Stack>
          <TextField label="Email" placeholder="Enter email..." type="email" />
          <TextField
            label="Password"
            placeholder="Enter password..."
            type="password"
          />
          <Button variant="contained" onClick={redirectToDashboard}>
            Login
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Login;
