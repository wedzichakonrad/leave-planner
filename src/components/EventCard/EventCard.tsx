import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { leaveTypes } from '../RequestForm/RequestForm';

interface EventCardProps {
  item: {};
}

export const EventCard = ({ item, onClick }: EventCardProps) => {
  const getColor = () => {
    switch (item.type) {
      case leaveTypes.HOLIDAY:
        return 'orange';
      case leaveTypes.MATERNITY_LEAVE:
        return 'pink';
      case leaveTypes.SICK_LEAVE:
        return 'green';
    }
  };

  return (
    <Card elevation={3} sx={{background: getColor(), transition: 'transform 1s', '&:hover': { transform: 'translateY(-4px) scale(1.05)' }, cursor: 'pointer' }} onClick={onClick}>
      <CardContent>
        <Stack gap={2}>
          <Box>
            <Typography>
              <b>Type:</b> {item.type}
            </Typography>
            <Typography>{item.description}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
