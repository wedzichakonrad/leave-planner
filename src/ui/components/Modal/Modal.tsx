import { ModalChildren } from './Modal.styled';
import type { ReactNode } from 'react';
import { Button, Stack, Modal as MuiModal } from '@mui/material';

interface ModalProps {
  open: boolean;
  handleClose?: () => void;
  children?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

const Modal = ({
  children,
  open,
  handleClose,
  onCancel,
  onConfirm,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Confirm',
}: ModalProps) => {
  return (
    <MuiModal
      disableAutoFocus
      disableEnforceFocus
      open={open}
      onClose={handleClose}
    >
        <ModalChildren>
          <Stack gap={2}>
            {children}
            {(onCancel || onConfirm) && (
              <Stack gap={2} direction="row" justifyContent="flex-end">
                {onCancel && (
                  <Button variant="outlined" onClick={onCancel}>
                    {cancelButtonText}
                  </Button>
                )}
                {onConfirm && (
                  <Button variant="contained" onClick={onConfirm}>
                    {confirmButtonText}
                  </Button>
                )}
              </Stack>
            )}
          </Stack>
        </ModalChildren>
    </MuiModal>
  );
};

export default Modal;
