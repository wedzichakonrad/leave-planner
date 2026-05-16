import { useFormik } from 'formik';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dropdown from '../../ui/components/Dropdown';

const RequestForm = () => {
  const dropdownOptions = [
    { label: 'Holiday', value: 'holiday' },
    { label: 'Sick Leave', value: 'sick_leave' },
    { label: 'Maternity Leave', value: 'maternity_leave' },
  ];

  const formik = useFormik({
    initialValues: {
      request_type: dropdownOptions[0].value,
      start_time: null,
      end_time: null,
      extra_notes: '',
    },
    onSubmit: (values) => {
      console.log('Dane formularza:', values);
    },
  });

  return (
    <Paper elevation={4} sx={{ p: 4 }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={2}>
          <Typography variant="h5">Request your leave</Typography>

          <Dropdown
            name="request_type"
            label="Request type"
            options={dropdownOptions}
            value={formik.values.request_type}
            onChange={(e: any) => formik.setFieldValue('request_type', e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="From"
              value={formik.values.start_time}
              onChange={(value) => formik.setFieldValue('start_time', value)}
            />
            <DatePicker
              label="To"
              value={formik.values.end_time}
              onChange={(value) => formik.setFieldValue('end_time', value)}
            />
          </LocalizationProvider>

          <TextareaAutosize
            name="extra_notes"
            minRows={3}
            placeholder="Notes..."
            value={formik.values.extra_notes}
            onChange={formik.handleChange}
            style={{ 
              width: '100%',
              padding: '8px', 
              borderRadius: '4px', 
              borderColor: '#ccc',
              fontFamily: 'inherit' 
            }}
          />

          <Button color="primary" variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit Request
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default RequestForm;