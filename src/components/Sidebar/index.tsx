import { Box, Flex, Text, Stack, Icon, Link } from '@chakra-ui/react';
import { ActiveLink } from '@/components';
import { useRouter } from 'next/router';

import {
  MdHome,
  MdGroups,
  MdHandyman,
  MdOutlineFormatListNumbered,
  MdPerson,
  MdAccountBalance,
} from 'react-icons/md';

import logoImg from '../../assets/logo-white.png';
import { colors } from '@/styles/globals';
import Image from 'next/image';

import { Container } from './styles';

const Sidebar = () => {
  const router = useRouter();

  console.log('router', router.pathname);

  return (
    <Container>
      <Flex className="imgContainer" mt={35} pb={35} justifyContent={'center'}>
        <Image src={logoImg} alt="Logo" />
      </Flex>

      <Stack spacing="12" align="center">
        <Box color={colors.white} w={'100%'}>
          <Stack spacing="8" w={'100%'}>
            <ActiveLink href="/">
              <Flex flexDir={'column'} alignItems={'center'}>
                <MdHome size={28} />
                <Text fontWeight="medium">{'Home'}</Text>
              </Flex>
            </ActiveLink>

            <ActiveLink href="/clients">
              <Flex flexDir={'column'} alignItems={'center'}>
                <MdGroups size={28} />
                <Text fontWeight="medium">{'Clientes'}</Text>
              </Flex>
            </ActiveLink>

            <ActiveLink href="/trabalhos">
              <Flex flexDir={'column'} alignItems={'center'}>
                <MdHandyman size={28} />
                <Text fontWeight="medium">{'Trabalhos'}</Text>
              </Flex>
            </ActiveLink>

            <ActiveLink href="/tarefas">
              <Flex flexDir={'column'} alignItems={'center'}>
                <MdOutlineFormatListNumbered />
                <Text fontWeight="medium">{'Tarefas'}</Text>
              </Flex>
            </ActiveLink>

            <ActiveLink href="/usuarios">
              <Flex flexDir={'column'} alignItems={'center'}>
                <MdPerson size={28} />
                <Text fontWeight="medium">{'Usuários'}</Text>
              </Flex>
            </ActiveLink>

            <ActiveLink href="/escritorio">
              <Flex flexDir={'column'} alignItems={'center'}>
                <MdAccountBalance size={28} />
                <Text fontWeight="medium">{'Escritório'}</Text>
              </Flex>
            </ActiveLink>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Sidebar;
