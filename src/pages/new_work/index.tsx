import React, { useEffect, useState } from 'react';
import { withAuth } from '@/middleware/withAuth';
import Link from 'next/link';

import { colors, DescriptionText } from '@/styles/globals';
import { Container, ContentContainer, Title } from './styles';
import { MdClose } from 'react-icons/md';

import { Flex } from '@chakra-ui/react';

import { Layout, Footer } from '@/components';

import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

const NewWork = () => {
  return (
    <>
      <Layout>
        <Container>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={'32px'}
            maxW={'1600px'}
          >
            <Title>{'Cadastrando Novo Trabalho'}</Title>
            <Link href="/works">
              <MdClose size={30} />
            </Link>
          </Flex>

          <ContentContainer></ContentContainer>
        </Container>
        <Footer />
      </Layout>
    </>
  );
};

export default withAuth(NewWork);
