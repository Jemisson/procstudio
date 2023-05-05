import { useState } from 'react';
import { useRouter } from 'next/router';

import { ActiveLink } from '@/components';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import BoxMaterial from '@mui/material/Box';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps, ISidebarProps } from '@/interfaces/ISidebar';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Toolbar, CssBaseline, Typography, IconButton } from '@mui/material';

import {
  MdHome,
  MdGroups,
  MdHandyman,
  MdOutlineFormatListNumbered,
  MdPerson,
  MdAccountBalance,
  MdOutlineArrowRight,
  MdOutlineListAlt,
  MdOutlineDescription,
  MdMenu,
  MdKeyboardArrowLeft,
} from 'react-icons/md';

import Image from 'next/image';
import { Container } from './styles';
import { colors } from '@/styles/globals';
import logoImg from '../../assets/logo-white.png';

const drawerWidth = 224;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: colors.white,
  backgroundColor: colors.primary,
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,

  '& svg': {
    color: colors.white,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: colors.primary,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Sidebar = ({ children }: ISidebarProps) => {
  const theme = useTheme();
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BoxMaterial sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MdMenu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* {Header Title} */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? null : <MdKeyboardArrowLeft />}
            </IconButton>
          </DrawerHeader>
          {open && (
            <>
              <Flex
                className="imgContainer"
                pb={35}
                justifyContent={'center'}
              >
                <Image src={logoImg} alt="Logo" />
              </Flex>
            </>
          )}

          <Box color={colors.white} w={'100%'}>
            <Stack spacing="8" w={'100%'}>
              <ActiveLink href="/">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdHome size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Página inicial'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/clients">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdGroups size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Clientes'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/works">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdHandyman size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Trabalhos'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/tasks">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdOutlineFormatListNumbered size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Tarefas'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/users">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdPerson size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Usuários'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/office">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdAccountBalance size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Escritório'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/reports">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdOutlineListAlt size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Relatórios'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/documents">
                <Flex w={'100%'} alignItems={'center'}>
                  <MdOutlineDescription size={24} className="icon" />
                  {open && (
                    <>
                      <Text fontWeight="medium">{'Documentos'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>
            </Stack>
          </Box>
        </Drawer>
      </Container>

      <BoxMaterial component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </BoxMaterial>
    </BoxMaterial>
  );
};

export default Sidebar;
