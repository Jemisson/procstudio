import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import Image from 'next/image';
import Logo from '../assets/logo-colors@3x.png';
import { Box, Link, Text } from '@chakra-ui/react';

import { Container, Content, Input, Form, Button } from '@/styles/homeStyles';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function handleSignIn(data: any) {
    setLoading(true);
    await signIn(data);
    setLoading(false);
  }

  return (
    <Container>
      <Head>
        <title>{'Login'}</title>
      </Head>

      <Content>
        <Box className="imageContainer">
          <Image src={Logo} alt="Logo" />
        </Box>
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Text m={'auto'} fontSize="4xl">
            {'Seja bem-vindo!'}
          </Text>

          <Box>
            <Box mb={4}>
              <Input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
              />
            </Box>
            <Box>
              <Input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Senha"
              />
            </Box>
          </Box>

          <Box display={'flex'} justifyContent={'space-around'}>
            <Link href="#">{'Cadastrar'}</Link>
            <Link href="#">{'Esqueceu sua senha?'}</Link>
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Button isLoading={loading} type="submit">
              {loading ? 'Carregando...' : 'ENTRAR'}
            </Button>
          </Box>
        </Form>
      </Content>
    </Container>
  );
};

export default Home;
