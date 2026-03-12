import Stack from '@mui/material/Stack';
import { Calendar } from '../../components/Calendar/Calendar';

const Insights = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={4}
      justifyContent="center"
      sx={{ height: '100%' }}
    >
      <Stack sx={{ height: '400px' }}>
        <Calendar />
      </Stack>
      <Stack sx={{ height: '400px' }}>
        <Calendar />
      </Stack>
      <Stack sx={{ height: '400px' }}>
        <Calendar />
      </Stack>
      <Stack sx={{ height: '400px' }}>
        <Calendar />
      </Stack>
      <Stack sx={{ height: '400px' }}>  
        <Calendar />
      </Stack>

      <Stack sx={{ height: '400px' }}>
        <Calendar />
      </Stack>
    </Stack>
  );
};

export default Insights;
