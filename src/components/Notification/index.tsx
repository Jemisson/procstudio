import React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

interface SnackbarMessageProps {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarMessage = ({
  open,
  message,
  severity,
  onClose,
}: SnackbarMessageProps) => {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
      <Alert severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
