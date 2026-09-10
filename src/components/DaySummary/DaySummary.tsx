import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const DaySummary = ({ item }) => {
  const theme = useTheme();

  return (
    <ListItem>
      <ListItemText primary={item.primaryLabel} secondary={item.secondaryLabel} />
    </ListItem>
  );
};

export default DaySummary;
