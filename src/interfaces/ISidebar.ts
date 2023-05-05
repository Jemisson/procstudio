import { ReactNode } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface ISidebarProps {
  children: ReactNode;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export type { ISidebarProps, AppBarProps };
