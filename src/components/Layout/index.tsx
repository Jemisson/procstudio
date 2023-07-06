import { useState } from 'react';
import { useRouter } from 'next/router';

import { ActiveLink } from '@/components';
import Link from 'next/link';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';

import { AppBarProps, ILayoutProps } from '@/interfaces/ILayout';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {
  Typography,
  Stack,
  Toolbar,
  CssBaseline,
  IconButton,
} from '@mui/material';

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
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from 'react-icons/md';

import Image from 'next/image';
import { colors } from '@/styles/globals';
import { Container, SelectContainer, CloseDropdown, Flex } from './styles';

import Logo from '../../assets/logo-white.png';
import Profile from '../../assets/Profile.png';

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

const Layout = ({ children }: ILayoutProps) => {
  const theme = useTheme();
  const { asPath } = useRouter();

  const [openSidebar, setOpenSidebar] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const handleDrawerOpen = () => {
    setOpenSidebar(true);
  };

  const handleDrawerClose = () => {
    setOpenSidebar(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={openSidebar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(openSidebar && { display: 'none' }),
            }}
          >
            <MdMenu />
          </IconButton>
          <SelectContainer
            onClick={() => setOpenUserMenu(!openUserMenu)}
            isOpen={openUserMenu}
          >
            <CloseDropdown
              className="close"
              onClick={() => setOpenUserMenu(false)}
            />
            <Image src={Profile} alt="Logo" />
            <Flex>
              <Flex>
                <Typography
                  fontSize="md"
                  color={colors.white}
                  marginLeft={2}
                  marginRight={2}
                >
                  {'procstudio'}
                </Typography>
              </Flex>
              <MdKeyboardArrowDown size={24} className="arrow" />
            </Flex>
            {openUserMenu && (
              <Flex className="selectItemsContainer">
                <Link href={'/home'}>
                  <Typography variant="subtitle2"> {'My account'} </Typography>
                </Link>
                <Link href={'/'}>
                  <Typography variant="subtitle2"> {'Logout'} </Typography>
                </Link>
              </Flex>
            )}
          </SelectContainer>
        </Toolbar>
      </AppBar>
      <Container>
        <Drawer variant="permanent" open={openSidebar}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? null : <MdKeyboardArrowLeft />}
            </IconButton>
          </DrawerHeader>
          {openSidebar && (
            <>
              <Flex
                className="imgContainer"
                pb={35}
                display={'flex'}
                justifyContent={'center'}
              >
                <Image src={Logo} alt="Logo" />
              </Flex>
            </>
          )}

          <Flex color={colors.white} sx={{ width: '100%' }}>
            <Stack spacing="8" sx={{ width: '100%' }}>
              <ActiveLink href="/customers">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/home'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdHome size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">
                        {'Página inicial'}
                      </Typography>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/customers">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/customers'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdGroups size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">{'Clientes'}</Typography>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/works">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/works'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdHandyman size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">
                        {'Trabalhos'}
                      </Typography>

                      <MdOutlineArrowRight
                        size={24}
                        className="arrow arrowWork"
                        style={{
                          transform:
                            asPath === '/newWork' ? 'rotate(90deg)' : 'none',
                        }}
                      />
                    </>
                  )}
                </Flex>
              </ActiveLink>
              {asPath === '/newWork' && (
                <Flex
                  sx={{
                    width: '100%',
                  }}
                  className="subItem"
                >
                  {openSidebar && (
                    <Typography fontWeight="regular">
                      {'Novo Trabalho'}
                    </Typography>
                  )}
                </Flex>
              )}
              <ActiveLink href="/tasks">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/tasks'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdOutlineFormatListNumbered size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">{'Tarefas'}</Typography>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/users">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/users'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdPerson size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">{'Usuários'}</Typography>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/office">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/office'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdAccountBalance size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">
                        {'Escritório'}
                      </Typography>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/reports">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/reports'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdOutlineListAlt size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">
                        {'Relatórios'}
                      </Typography>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/documents">
                <Flex
                  sx={{
                    width: '100%',
                    backgroundColor:
                      asPath === '/documents'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdOutlineDescription size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Typography fontWeight="regular">
                        {'Documentos'}
                      </Typography>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>
            </Stack>
          </Flex>
        </Drawer>
      </Container>

      <Box
        component="main"
        sx={{ flexGrow: 1, width: '100%', overflow: 'hidden' }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
