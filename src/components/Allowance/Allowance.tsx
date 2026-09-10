import Stack from '@mui/material/Stack';
import Chart from '../Chart/Chart';
import Breakdown from '../Breakdown/Breakdown';

const Allowance = () => {
  const data = [
    { id: 0, value: 12, label: 'Dostepne dni wolne' },
    { id: 1, value: 3, label: 'Dni oczekujące na akceptacje' },
    { id: 2, value: 13, label: 'Wykorzystane dni wolne' },
  ];

  return (
    <Stack gap={4}>
      <Chart data={data} />
      <Breakdown data={data} />
    </Stack>
  );
};

export default Allowance;
