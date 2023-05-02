import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import { ActiveLink } from '@/components';
import { useRouter } from 'next/router';

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
} from 'react-icons/md';

import logoImg from '../../assets/logo-white.png';
import { colors } from '@/styles/globals';
import Image from 'next/image';

import { Container } from './styles';

const Sidebar = () => {
  const router = useRouter();

  return (
    <Container>
      <Flex className="imgContainer" mt={35} pb={35} justifyContent={'center'}>
        <Image src={logoImg} alt="Logo" />
      </Flex>

      <Stack>
        <Box color={colors.white} w={'100%'}>
          <Stack spacing="8" w={'100%'}>
            <ActiveLink href="/">
              <Flex w={'100%'} alignItems={'center'}>
                <MdHome size={24} className="icon" />
                <Text fontWeight="medium">{'Página inicial'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>

            <ActiveLink href="/clients">
              <Flex w={'100%'} alignItems={'center'}>
                <MdGroups size={24} className="icon" />
                <Text fontWeight="medium">{'Clientes'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>

            <ActiveLink href="/works">
              <Flex w={'100%'} alignItems={'center'}>
                <MdHandyman size={24} className="icon" />
                <Text fontWeight="medium">{'Trabalhos'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>

            <ActiveLink href="/tasks">
              <Flex w={'100%'} alignItems={'center'}>
                <MdOutlineFormatListNumbered size={24} className="icon" />
                <Text fontWeight="medium">{'Tarefas'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>

            <ActiveLink href="/users">
              <Flex w={'100%'} alignItems={'center'}>
                <MdPerson size={24} className="icon" />
                <Text fontWeight="medium">{'Usuários'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>

            <ActiveLink href="/office">
              <Flex w={'100%'} alignItems={'center'}>
                <MdAccountBalance size={24} className="icon" />
                <Text fontWeight="medium">{'Escritório'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>

            <ActiveLink href="/reports">
              <Flex w={'100%'} alignItems={'center'}>
                <MdOutlineListAlt size={24} className="icon" />
                <Text fontWeight="medium">{'Relatórios'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>

            <ActiveLink href="/documents">
              <Flex w={'100%'} alignItems={'center'}>
                <MdOutlineDescription size={24} className="icon" />
                <Text fontWeight="medium">{'Documentos'}</Text>
                <MdOutlineArrowRight className="arrow" />
              </Flex>
            </ActiveLink>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Sidebar;
