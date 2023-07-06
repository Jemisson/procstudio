import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { colors, border } from '@/styles/globals';

import { Box, Button, Typography } from '@mui/material';

import {
  MdVisibility,
  MdModeEdit,
  MdArchive,
  MdGavel,
  MdMoreHoriz,
} from 'react-icons/md';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    borderRadius: 4,
    minWidth: 150,
    boxShadow: border.shadow,
  },
}));

interface IMoreMenuProps {
  details?: () => void;
  handleWorks?: () => void;
  edit?: () => void;
  inactive?: () => void;
}

const MoreMenu = ({ details, handleWorks, edit, inactive }: IMoreMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
          width: '100%',
          height: '100%',
          boxShadow: 'none',
          textTransform: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <MdMoreHoriz style={{ color: 'gray' }} size={22} />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={details} disableRipple>
          <MdVisibility size={22} color={colors.icons} />
          <Typography ml={1} variant="inherit">
            {'Detalhes'}
          </Typography>
        </MenuItem>

        <Divider color={colors.icons} />

        <MenuItem onClick={edit} disableRipple>
          <MdModeEdit size={22} color={colors.icons} />
          <Typography ml={1} variant="inherit">
            {'Editar'}
          </Typography>
        </MenuItem>

        <Divider color={colors.icons} />

        <MenuItem onClick={handleWorks} disableRipple>
          <MdGavel size={22} color={colors.icons} />
          <Typography ml={1} variant="inherit">
            {'Trabalhos'}
          </Typography>
        </MenuItem>

        <Divider color={colors.icons} />

        <MenuItem onClick={inactive} disableRipple>
          <MdArchive size={22} color={colors.icons} />
          <Typography ml={1} variant="inherit">
            {'Inativar'}
          </Typography>
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};

export default MoreMenu;
