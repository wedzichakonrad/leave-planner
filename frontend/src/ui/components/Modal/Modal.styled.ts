import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalChildren = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: theme.shape.borderRadius,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
}));
