import { Typography, Paper, Stack, Box, LinearProgress } from '@mui/material';

const LeaveStats = () => {
  const stats = [
    { label: 'Holiday', value: 12, total: 26, color: '#1976d2' },
    { label: 'Sick Leave', value: 4, total: 10, color: '#ed6c02' },
    { label: 'Maternity Leave', value: 0, total: 100, color: '#9c27b0' },
  ];

  return (
    <Paper elevation={4} sx={{ p: 4, height: '100%' }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Leave Statistics
      </Typography>
      
      <Stack gap={3}>
        {stats.map((stat) => {
          const percentage = (stat.value / stat.total) * 100;

          return (
            <Box key={stat.label}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" fontWeight="medium">
                  {stat.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.value} / {stat.total} days
                </Typography>
              </Box>
              
              <LinearProgress 
                variant="determinate" 
                value={percentage} 
                sx={{ 
                  height: 10, 
                  borderRadius: 5,
                  backgroundColor: '#eee',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: stat.color,
                    borderRadius: 5,
                  }
                }} 
              />
            </Box>
          );
        })}
      </Stack>

      <Typography variant="caption" sx={{ display: 'block', mt: 4, color: 'text.secondary', textAlign: 'center' }}>
        Based on your current employment contract
      </Typography>
    </Paper>
  );
};

export default LeaveStats;