import React, { useEffect, useState } from 'react';
import { withAuth } from '@/middleware/withAuth';

import { getAllCustomers } from '@/services/customers';

import { colors, TitlePage, DescriptionText } from '@/styles/globals';
import { Container, ContentContainer, Input } from '@/styles/customersStyles';
import {
  MdOutlineMoreHoriz,
  MdOutlineAddCircle,
  MdSearch,
} from 'react-icons/md';

import { Box, Button } from '@mui/material';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';

import { Layout, Footer, MoreMenu } from '@/components';
import { ICustomerProps } from '@/interfaces/ICustomer';

const Customers = () => {
  const [customersList, setCustomersList] = useState<ICustomerProps[]>([]);
  const [customersListFiltered, setCustomersListFiltered] = useState<
    ICustomerProps[]
  >([]);


  const getRowClassName = (params: any) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  const handleDetails = (params: GridRowParams) => {
    console.log('Detalhes', params);
  };

  useEffect(() => {
    const getCustomers = async () => {
      const response = await getAllCustomers();
      setCustomersList(response.data);
      setCustomersListFiltered(response.data);
    };

    getCustomers();
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
                  customersListFiltered &&
                  customersListFiltered.map((customer: ICustomerProps) => ({
                    id: customer.id,
                    name: customer.attributes.name,
                    type: customer.type,
                    cpf: customer.attributes.cpf,
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
                      <MoreMenu details={() => handleDetails(params.row)} />
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

export default withAuth(Customers);
