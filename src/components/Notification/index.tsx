import React from 'react';
import { colors, theme } from '@/styles/globals';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { ThemeProvider } from 'styled-components';

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
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'success':
        return theme.palette.success.main;
      case 'error':
        return theme.palette.error.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'info':
        return theme.palette.info.main;
      default:
        return theme.palette.success.main;
    }
  };

  const alertColor = getSeverityColor(severity);

  return (
    <ThemeProvider theme={theme}>
      <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
        <Alert
          severity={severity}
          onClose={onClose}
          sx={{ backgroundColor: alertColor, color: colors.white }}
        >
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default SnackbarMessage;
