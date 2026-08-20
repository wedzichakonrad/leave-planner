import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Box,
  Stack,
} from '@mui/material';

const PendingRequests = () => {
  const pendingRequests = [
    {
      request_type: 'holiday',
      start_time: new Date('2026-05-10'),
      end_time: new Date('2026-05-15'),
      extra_notes: 'Holidays in the mountains.',
      status: 'pending',
    },
    {
      request_type: 'sick_leave',
      start_time: new Date('2026-04-25'),
      end_time: new Date('2026-04-27'),
      extra_notes: 'Dentist visit.',
      status: 'pending',
    },
  ];

  return (
    <Stack gap={2}>
      <Typography variant="h5">Pending Requests</Typography>
      <List>
        {pendingRequests.map((request, index) => (
          <Box key={index}>
            <ListItem
              alignItems="flex-start"
              sx={{ px: 0, py: 2 }}
              secondaryAction={
                <Chip
                  label={request.status}
                  color="warning"
                  variant="outlined"
                  size="small"
                />
              }
            >
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="bold">
                    {request.request_type.replace('_', ' ').toUpperCase()}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                      sx={{ display: 'block' }}
                    >
                      {request.start_time.toLocaleDateString()} -{' '}
                      {request.end_time.toLocaleDateString()}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontStyle: 'italic' }}
                    >
                      "{request.extra_notes}"
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < pendingRequests.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Stack>
  );
};

export default PendingRequests;
