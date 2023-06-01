import { useState } from 'react';
import { useRouter } from 'next/router';

import { ActiveLink } from '@/components';
import BoxMaterial from '@mui/material/Box';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps, ILayoutProps } from '@/interfaces/ILayout';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Toolbar, CssBaseline, IconButton } from '@mui/material';

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
import { Container, SelectContainer, CloseDropdown } from './styles';

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

  const userConfig = [
    {
      id: 1,
      description: 'Detalhes',
    },
    {
      id: 2,
      description: 'Sair',
    },
  ];

  const handleDrawerOpen = () => {
    setOpenSidebar(true);
  };

  const handleDrawerClose = () => {
    setOpenSidebar(false);
  };

  return (
    <BoxMaterial sx={{ display: 'flex' }}>
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
            <Box display={'flex'} alignItems={'center'}>
              <Box>
                <Text
                  fontSize="md"
                  color={colors.white}
                  marginLeft={2}
                  marginRight={2}
                >
                  {'procstudio'}
                </Text>
              </Box>
              <MdKeyboardArrowDown size={24} className="arrow" />
            </Box>
            {openUserMenu && (
              <Box className="selectItemsContainer">
                {userConfig.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      className="selectItem"
                      onClick={() => console.log(item.id)}
                    >
                      {item.description}
                    </Box>
                  );
                })}
              </Box>
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
              <Flex className="imgContainer" pb={35} justifyContent={'center'}>
                <Image src={Logo} alt="Logo" />
              </Flex>
            </>
          )}

          <Box color={colors.white} w={'100%'}>
            <Stack spacing="8" w={'100%'}>
              <ActiveLink href="/">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdHome size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Text fontWeight="medium">{'Página inicial'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/clients">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/clients'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdGroups size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Text fontWeight="medium">{'Clientes'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/works">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/works'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdHandyman size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Text fontWeight="medium">{'Trabalhos'}</Text>

                      <MdOutlineArrowRight
                        size={24}
                        className="arrow"
                        style={{
                          transform:
                            asPath === '/new_work' ? 'rotate(90deg)' : 'none',
                        }}
                      />
                    </>
                  )}
                </Flex>
              </ActiveLink>
              {asPath === '/new_work' && (
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  className="subItem"
                >
                  {openSidebar && (
                    <Text fontWeight="medium">{'Novo Trabalho'}</Text>
                  )}
                </Flex>
              )}
              <ActiveLink href="/tasks">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/tasks'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdOutlineFormatListNumbered size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Text fontWeight="medium">{'Tarefas'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/users">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/users'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdPerson size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Text fontWeight="medium">{'Usuários'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/office">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/office'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdAccountBalance size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Text fontWeight="medium">{'Escritório'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/reports">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/reports'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdOutlineListAlt size={24} className="icon" />
                  {openSidebar && (
                    <>
                      <Text fontWeight="medium">{'Relatórios'}</Text>
                      <MdOutlineArrowRight size={24} className="arrow" />
                    </>
                  )}
                </Flex>
              </ActiveLink>

              <ActiveLink href="/documents">
                <Flex
                  w={'100%'}
                  alignItems={'center'}
                  style={{
                    background:
                      asPath === '/documents'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'transparent',
                  }}
                >
                  <MdOutlineDescription size={24} className="icon" />
                  {openSidebar && (
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

      <BoxMaterial
        component="main"
        sx={{ flexGrow: 1, width: '100%', overflow: 'hidden' }}
      >
        {children}
      </BoxMaterial>
    </BoxMaterial>
  );
};

export default Layout;
