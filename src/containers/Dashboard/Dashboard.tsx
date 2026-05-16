import Stack from '@mui/material/Stack';
import Allowance from '../../components/Allowance/Allowance';
import NextWeek from '../../components/NextWeek/NextWeek';
import PendingRequests from '../../components/PendingRequests/PendingRequests';
import RequestForm from '../../components/RequestForm/RequestForm';
import Grid from '@mui/material/Grid';
import LeaveStats from '../../components/LeaveStats/LeaveStats';

const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, xl: 6 }}>
        <Stack gap={4}>
          <Allowance />
          <LeaveStats />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <NextWeek />
      </Grid>
      <Grid size={{ xs: 12, xl: 3 }}>
        <Stack gap={4}>
          <RequestForm />
          <PendingRequests />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
