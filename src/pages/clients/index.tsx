import React, { useEffect, useState } from 'react';
import { withAuth } from '@/middleware/withAuth';

import { colors, TitlePage, DescriptionText } from '@/styles/globals';
import { Container, ContentContainer, Input } from './styles';
import {
  MdOutlineMoreHoriz,
  MdOutlineAddCircle,
  MdSearch,
} from 'react-icons/md';

import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { clientData } from '../../services';
import { Layout, Footer } from '@/components';
import { IClientProps } from '@/interfaces/IClients';

const Clients = () => {
  const [clientsList, setClientsList] = useState<IClientProps[]>([]);

  const getRowClassName = (params: any) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  useEffect(() => {
    setClientsList(clientData);
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <TitlePage>{'Clientes'}</TitlePage>

          <ContentContainer>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box>
                <Input>
                  <input
                    type="text"
                    placeholder="Buscar Cliente"
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
                <DescriptionText style={{ cursor: 'pointer' }} className="ml-8">
                  {'Adicionar'}
                </DescriptionText>
                <MdOutlineAddCircle size={20} />
              </Button>
            </Box>
            <Box mt={'20px'} sx={{ height: 450 }}>
              <DataGrid
                disableColumnMenu
                disableRowSelectionOnClick
                rows={
                  clientsList &&
                  clientsList.map((client: IClientProps, index: number) => ({
                    id: index,
                    name: client.name,
                    type: client.type,
                    cpf: client.cpf,
                    email: client.emails[0].email,
                    city: client.addresses[0].city,
                    contact: client.phones[0].phone,
                  }))
                }
                columns={[
                  {
                    flex: 1,
                    field: 'name',
                    headerName: 'Nome',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'type',
                    headerName: 'Tipo',
                    align: 'center',
                    headerAlign: 'center',
                  },
                  {
                    flex: 1,
                    field: 'cpf',
                    headerName: 'CPF',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'email',
                    headerName: 'E-mail',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'city',
                    headerName: 'Cidade',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'contact',
                    headerName: 'Contato',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
                  },
                  {
                    flex: 1,
                    field: 'actions',
                    headerName: 'Ações',
                    align: 'center',
                    headerAlign: 'center',
                    sortable: false,
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
                  noRowsLabel: 'Nenhum cliente encontrado',
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

export default withAuth(Clients);
