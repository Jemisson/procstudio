import { ReactNode } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface ILayoutProps {
  children: ReactNode;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export type { ILayoutProps, AppBarProps };
