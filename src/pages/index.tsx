import { Layout } from '@/components';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Layout>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'100vh'}
      >
        <label>{'Proc Studio'}</label>
      </Box>
    </Layout>
  );
};

export default Home;
