import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';

import { Container } from './styles';
import Logo from '../../assets/logo-colors.png';
import Facebook from '../../assets/Facebook.png';
import Linkedin from '../../assets/Linkedin.png';
import Twitter from '../../assets/Twitter.png';

import { MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';
import { colors } from '@/styles/globals';

const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Box>
        <Box>
          <Image src={Logo} alt="Logo" />
          <Text>{'Tecnologia para uma vida mais fácil.'}</Text>
        </Box>
      </Box>

      <Box>
        <Box>
          <Box display={'flex'}>
            <Text fontSize="md" color={colors.black} marginRight={1}>
              {'Mapa do Sistema'}
            </Text>
            <MdKeyboardArrowRight size={22} className="arrow" />
          </Box>
          <Link href={'/clients'}>
            <Text fontSize="sm">{'Clientes'}</Text>
          </Link>
          <Link href={'/works'}>
            <Text fontSize="sm">{'Trabalhos'}</Text>
          </Link>
          <Link href={'/tasks'}>
            <Text fontSize="sm">{'Tarefas'}</Text>
          </Link>
          <Link href={'/users'}>
            <Text fontSize="sm">{'Usuários'}</Text>
          </Link>
        </Box>
      </Box>

      <Box>
        <Box>
          <Text fontSize="md" color={colors.black}>
            {`ProcStudio ${currentYear}`}
          </Text>
          <Text fontSize="sm">{'Licenciado para ProcStudio'}</Text>
          <Text fontSize="sm">{'Rui Barbosa,'}</Text>
          <Text fontSize="sm">{'nº 262, Cascavel - PR'}</Text>
        </Box>
      </Box>

      <Box display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
        <Box display={'flex'} cursor={'pointer'} onClick={scrollToTop}>
          <Text fontSize="md" color={colors.black} marginRight={1}>
            {'Voltar ao topo'}
          </Text>
          <MdKeyboardArrowUp size={22} className="arrow" />
        </Box>

        <Box display={'flex'} justifyContent={'end'}>
          <Link href={'/'}>
            <Image src={Linkedin} alt="Logo" />
          </Link>

          <Link href={'/'}>
            <Image src={Facebook} alt="Logo" />
          </Link>

          <Link href={'/'}>
            <Image src={Twitter} alt="Logo" />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
