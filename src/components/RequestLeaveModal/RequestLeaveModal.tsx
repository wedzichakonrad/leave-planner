import Modal from '../../ui/components/Modal/Modal';
import RequestForm from '../RequestForm/RequestForm';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack } from '@mui/material';
import { useApp } from '../../hooks/useApp';

export const requestLeaveModalId = 'requestLeaveModalId';

type RequestLeavePayload = {
  start_time?: Date;
};

const RequestLeaveModal = () => {
  const { modalData, setModalData } = useApp();
  const requestLeaveModalData = modalData?.[requestLeaveModalId] as RequestLeavePayload;

  const onClose = () => {
    setModalData(null);
  };
  return (
    <Modal open={!!requestLeaveModalData} handleClose={onClose}>
      <Stack alignItems="flex-end">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <RequestForm initialFormData={requestLeaveModalData ? { start_time: requestLeaveModalData?.start_time} : undefined} onClose={onClose}/>
    </Modal>
  );
};

export default RequestLeaveModal;
