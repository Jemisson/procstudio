import React, { useEffect, useState } from 'react';

import { Layout } from '@/components';
import { colors, DescriptionText } from '@/styles/globals';
import { Container, Title, ContentContainer, Input } from './styles';
import {
  MdOutlineMoreHoriz,
  MdOutlineAddCircle,
  MdSearch,
} from 'react-icons/md';

import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { clientData } from '../../services';
import { IClientProps } from '@/interfaces/clients';

const Clients = () => {
  const [clientsList, setClientsList] = useState<IClientProps[]>([]);

  useEffect(() => {
    setClientsList(clientData);
  }, []);

  return (
    <Layout>
      <Container>
        <Title>{'Clientes'}</Title>

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
                backgroundColor: colors.primary,
                color: colors.white,
                '&:hover': {
                  backgroundColor: colors.primary,
                  color: colors.white,
                },
              }}
              onClick={() => console.log('Adicionar')}
            >
              <DescriptionText className="ml-8">{'Adicionar'}</DescriptionText>
              <MdOutlineAddCircle size={20} />
            </Button>
          </Box>
          <Box mt={'20px'} sx={{ height: 400 }}>
            <DataGrid
              disableRowSelectionOnClick={true}
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
                  width: 160,
                  field: 'name',
                  headerName: 'Nome',
                  align: 'center',
                  headerAlign: 'center',
                },
                {
                  width: 100,
                  field: 'type',
                  headerName: 'Tipo',
                  align: 'center',
                  headerAlign: 'center',
                },
                {
                  width: 160,
                  field: 'cpf',
                  headerName: 'CPF',
                  align: 'center',
                  headerAlign: 'center',
                  sortable: false,
                },
                {
                  width: 160,
                  field: 'email',
                  headerName: 'Email',
                  align: 'center',
                  headerAlign: 'center',
                  sortable: false,
                },
                {
                  width: 100,
                  field: 'city',
                  headerName: 'Cidade',
                  align: 'center',
                  headerAlign: 'center',
                  sortable: false,
                },
                {
                  width: 160,
                  field: 'contact',
                  headerName: 'Contato',
                  align: 'center',
                  headerAlign: 'center',
                  sortable: false,
                },
                {
                  width: 80,
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
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
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
    </Layout>
  );
};

export default Clients;
