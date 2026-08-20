import { useFormik } from 'formik';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dropdown from '../../ui/components/Dropdown/Dropdown';
import { useApp } from '../../hooks/useApp';

export const leaveTypes = {
  HOLIDAY: 'holiday',
  SICK_LEAVE: 'sick_leave',
  MATERNITY_LEAVE: 'maternity_leave',
} as const;

export type LeaveType = (typeof leaveTypes)[keyof typeof leaveTypes];

const dropdownOptions = [
  { label: 'Holiday', value: leaveTypes.HOLIDAY },
  { label: 'Sick Leave', value: leaveTypes.SICK_LEAVE },
  { label: 'Maternity Leave', value: leaveTypes.MATERNITY_LEAVE },
];

interface RequestFormProps {
  initialFormData?: {
    request_type?: LeaveType;
    start_time?: Date;
    end_time?: Date;
    extra_notes?: string;
  };
  onClose: () => void;
}

const RequestForm = ({ initialFormData, onClose }: RequestFormProps) => {
  const { setCalendarEvents } = useApp();
  console.log(initialFormData)
  const formik = useFormik({
    initialValues: {
      request_type: initialFormData?.request_type || dropdownOptions[0].value,
      start_time: initialFormData?.start_time || null,
      end_time: initialFormData?.end_time || null,
      extra_notes: initialFormData?.extra_notes || '',
    },
    onSubmit: (values) => {
      setCalendarEvents(cl => [...cl, {
          starts_at: values.start_time,
          ends_at: values.end_time ? values.end_time : values.start_time,
          type: values.request_type,
          description: values.extra_notes
      }])
      onClose?.();
      console.log('Dane formularza:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={2}>
        <Typography variant="h5">Request your leave</Typography>

        <Dropdown
          name="request_type"
          label="Request type"
          options={dropdownOptions}
          value={formik.values.request_type}
          onChange={(e: any) =>
            formik.setFieldValue('request_type', e.target.value)
          }
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
            fontFamily: 'inherit',
          }}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit Request
        </Button>
      </Stack>
    </form>
  );
};

export default RequestForm;
