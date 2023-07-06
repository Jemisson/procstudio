import React, { useEffect } from 'react';
import { withAuth } from '@/middleware/withAuth';

import { TitlePage } from '@/styles/globals';
import {} from 'react-icons/md';

import { Box, Typography } from '@mui/material';

import { Layout, Footer } from '@/components';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <Box>
          <TitlePage>{'Clientes'}</TitlePage>

          <Box>
            <Typography variant="h6" component="div">
              {'Home'}
            </Typography>
          </Box>
        </Box>
        <Footer />
      </Layout>
    </>
  );
};

export default withAuth(Home);
