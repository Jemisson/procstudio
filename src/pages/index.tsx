import { z } from 'zod';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import Image from 'next/image';
import Logo from '../assets/logo-colors@3x.png';
import { Box, Link, Typography } from '@mui/material';

import { Container, Content, Input, Form, Button } from '@/styles/loginStyles';

const UserSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email é obrigatório' })
    .email({ message: 'Email inválido' }),
  password: z.string().nonempty({ message: 'Senha é obrigatória' }),
});

type UserDataForm = z.infer<typeof UserSchema>;

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataForm>({
    resolver: zodResolver(UserSchema),
  });
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
          <Typography sx={{ margin: 'auto', fontSize: '32px' }}>
            {'Seja bem-vindo!'}
          </Typography>

          <Box>
            <Box mb={2}>
              <Input
                isErrored={!!errors.email}
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
              />
            </Box>
            <Box>
              <Input
                isErrored={!!errors.password}
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Senha"
              />
            </Box>
          </Box>

          <Box
            display={'flex'}
            justifyContent={'center'}
            sx={{ marginTop: '8px' }}
          >
            <Button
              isLoading={loading}
              type="submit"
              style={{
                cursor: 'pointer',
              }}
            >
              <Typography variant="button">
                {loading ? 'Carregando...' : 'ENTRAR'}
              </Typography>
            </Button>
          </Box>
          <Box
            textAlign={'right'}
            ml={'auto'}
            display={'flex'}
            flexDirection={'column'}
          >
            <Link href="#">{'Cadastrar'}</Link>
            <Link href="#">{'Esqueceu sua senha?'}</Link>
          </Box>
        </Form>
      </Content>
    </Container>
  );
};

export default Home;
