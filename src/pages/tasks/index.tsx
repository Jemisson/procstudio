import React, { useEffect, useState } from 'react';
import { withAuth } from '@/middleware/withAuth';

import { colors, Title, DescriptionText } from '@/styles/globals';
import { Container, ContentContainer, Input } from './styles';
import {
  MdOutlineAddCircle,
  MdVisibility,
  MdModeEdit,
  MdSearch,
} from 'react-icons/md';

import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Layout, Footer } from '@/components';

import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

const Tasks = () => {
  const getRowClassName = (params: any) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <Container>
          <Title>{'Tarefas'}</Title>

          <ContentContainer>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box>
                <Input>
                  <input
                    type="text"
                    placeholder="Buscar Tarefa"
                    onChange={e => console.log('Busca', e.target.value)}
                  />
                  <MdSearch size={25} />
                </Input>
              </Box>
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
                <DescriptionText className="ml-8">
                  {'Adicionar'}
                </DescriptionText>
                <MdOutlineAddCircle size={20} />
              </Button>
            </Box>
            <Box mt={'20px'} sx={{ height: 450 }}>
              <DataGrid
                disableColumnMenu
                disableRowSelectionOnClick
                rows={[]}
                columns={[
                  {
                    flex: 1,
                    field: 'editar',
                    headerName: 'Nome',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                    editable: false,
                    renderCell: (params: any) => (
                      <MdModeEdit
                        size={20}
                        cursor="pointer"
                        onClick={() => console.log('Actions', params)}
                      />
                    ),
                  },
                  {
                    flex: 1,
                    field: 'description',
                    headerName: 'Descrição',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'client',
                    headerName: 'Cliente',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'work',
                    headerName: 'Trabalho',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'limitDate',
                    headerName: 'Data Limite',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'status',
                    headerName: 'Status',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'details',
                    headerName: 'Detalhes',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                    editable: false,
                    renderCell: (params: any) => (
                      <MdVisibility
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
                  noRowsLabel: 'Nenhuma tarefa encontrada',
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

export default withAuth(Tasks);
