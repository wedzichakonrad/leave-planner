import Stack from '@mui/material/Stack';
import Allowance from '../../components/Allowance/Allowance';
import NextWeek from '../../components/NextWeek/NextWeek';
import PendingRequests from '../../components/PendingRequests/PendingRequests';
import RequestForm from '../../components/RequestForm/RequestForm';
import LeaveStats from '../../components/LeaveStats/LeaveStats';
import { Paper, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, xl: 6 }}>
        <Stack gap={4}>
          <Paper elevation={4} sx={{ p: 4 }}>
            <Allowance />
          </Paper>
          <Paper elevation={4} sx={{ p: 4 }}>
            <LeaveStats />
          </Paper>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <Paper elevation={4} sx={{ p: 4 }}>
          <NextWeek />
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <Stack gap={4}>
          <Paper elevation={4} sx={{ p: 4 }}>
            <RequestForm />
          </Paper>
          <Paper elevation={4} sx={{ p: 4 }}>
            <PendingRequests />
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
