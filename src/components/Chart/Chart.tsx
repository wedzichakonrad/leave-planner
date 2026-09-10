import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';

const Chart = ({data}) => {
  const theme = useTheme();
  
  return (
    <Stack>
      <PieChart
        colors={[theme.palette.info.main, theme.palette.grey[400], theme.palette.grey[500]]}
        series={[
          {
            innerRadius: 0,
            outerRadius: 100,
            data,
          },
        ]}
        width={250}
        height={250}
      />
    </Stack>
  );
};

export default Chart;
