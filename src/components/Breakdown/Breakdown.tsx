import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledBodyTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Breakdown = ({ data }) => {
  return (
    <Stack>
      <Table>
        <TableBody>
          {data.map((row) => {
            return (
              <StyledBodyTableRow key={row.label}>
                <TableCell>{row.label}</TableCell>
                <TableCell>{row.value}</TableCell>
              </StyledBodyTableRow>
            );
          })}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default Breakdown;
