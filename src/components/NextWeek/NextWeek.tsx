import { Box, Typography, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DaySummary from '../DaySummary/DaySummary';

const NestWeek = () => {
  const theme = useTheme();

  const data = [
    {
      primaryLabel: 'Thursday 19 2024',
      secondaryLabel: 'Sick Leave',
    },
    {
      primaryLabel: 'Friday 20 2024',
      secondaryLabel: 'Work',
    },
    {
      primaryLabel: 'Saturday 21 2024',
      secondaryLabel: 'National Holiday',
    },
    {
      primaryLabel: 'Sunday 22 2024',
      secondaryLabel: 'Holiday',
    },
    {
      primaryLabel: 'Monday 23 2024',
      secondaryLabel: 'Work',
    },
    {
      primaryLabel: 'Tuesday 24 2024',
      secondaryLabel: 'Work',
    },
    {
      primaryLabel: 'Wednesday 25 2024',
      secondaryLabel: 'Work',
    },
  ];
  return (
    <Box>
      <Typography variant="h5">Next 7 days</Typography>
      <List>
        {data.map((item) => (
          <DaySummary item={item} key={item.primaryLabel} />
        ))}
      </List>
    </Box>
  );
};

export default NestWeek;
