import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { GetServerSidePropsContext } from 'next';

export const withAuth = (WrappedComponent: React.FC) => {
  const Wrapper: React.FC = props => {
    const router = useRouter();

    useEffect(() => {
      const { ['nextauth.token']: token } = parseCookies();

      if (!token || token === 'undefined') {
        router.push('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { ['nextauth.token']: token } = parseCookies(ctx);

  if (!token || token === 'undefined') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
