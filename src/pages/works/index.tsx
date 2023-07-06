import React, { useEffect } from 'react';
import { withAuth } from '@/middleware/withAuth';
import Link from 'next/link';

import { getAllWorks } from '@/services/works';

import { colors, TitlePage, DescriptionText } from '@/styles/globals';
import {
  Container,
  ContentContainer,
  InputContainer,
} from '@/styles/worksStyles';
import {
  MdOutlineMoreHoriz,
  MdOutlineAddCircle,
  MdSearch,
} from 'react-icons/md';

import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Layout, Footer } from '@/components';

const Works = () => {
  const getRowClassName = (params: any) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  useEffect(() => {
    const getWorks = async () => {
      const response = await getAllWorks();
      console.log('Works', response);
    };

    getWorks();
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <TitlePage>{'Trabalhos'}</TitlePage>

          <ContentContainer>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box>
                <InputContainer>
                  <input
                    type="text"
                    placeholder="Buscar Trabalho"
                    onChange={e => console.log('Busca', e.target.value)}
                  />
                  <MdSearch size={25} />
                </InputContainer>
              </Box>
              <Link href="/newWork">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: colors.quartiary,
                    color: colors.white,
                    height: 36,
                    '&:hover': {
                      backgroundColor: colors.quartiaryHover,
                    },
                  }}
                  onClick={() => console.log('Adicionar')}
                >
                  <DescriptionText
                    style={{ cursor: 'pointer' }}
                    className="ml-8"
                  >
                    {'Adicionar'}
                  </DescriptionText>
                  <MdOutlineAddCircle size={20} />
                </Button>
              </Link>
            </Box>
            <Box mt={'20px'} sx={{ height: 450 }}>
              <DataGrid
                disableColumnMenu
                disableRowSelectionOnClick
                rows={[]}
                columns={[
                  {
                    flex: 1,
                    field: 'client',
                    headerName: 'Cliente',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'procedure',
                    headerName: 'Procedimento',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'subject',
                    headerName: 'Assunto',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'requestProcess',
                    headerName: 'Requerimento/Processo',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'responsible',
                    headerName: 'Responsável',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'partner',
                    headerName: 'Parceiro',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'actions',
                    headerName: 'Ações',
                    align: 'center',
                    headerAlign: 'center',
                    editable: false,
                    renderCell: (params: any) => (
                      <MdOutlineMoreHoriz
                        size={20}
                        cursor="pointer"
                        onClick={() => console.log('Actions', params)}
                      />
                    ),
                  },
                ]}
                getRowClassName={getRowClassName}
                initialState={{
                  pagination: { paginationModel: { pageSize: 10 } },
                }}
                localeText={{
                  noRowsLabel: 'Nenhum trablaho encontrado',
                  MuiTablePagination: {
                    labelRowsPerPage: 'Linhas por página',
                    labelDisplayedRows(paginationInfo) {
                      return `${paginationInfo.from}- ${paginationInfo.to} de ${paginationInfo.count}`;
                    },
                  },
                }}
                pageSizeOptions={[5, 10, 25]}
              />
            </Box>
          </ContentContainer>
        </Container>
        <Footer />
      </Layout>
    </>
  );
};

export default withAuth(Works);
