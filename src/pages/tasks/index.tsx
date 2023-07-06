import React, { useEffect, useState } from 'react';
import { withAuth } from '@/middleware/withAuth';

import { getAllTasks } from '@/services/tasks';
import { ITaskProps } from '@/interfaces/ITask';

import { colors, TitlePage, DescriptionText } from '@/styles/globals';
import { Container, ContentContainer, Input } from '@/styles/tasksStyles';
import {
  MdOutlineAddCircle,
  MdVisibility,
  MdModeEdit,
  MdSearch,
} from 'react-icons/md';

import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Layout, Footer, NewTaskModal } from '@/components';

const Tasks = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [tasksList, setTasksList] = useState<ITaskProps[]>([]);
  const [filteredTasksList, setFilteredTasksList] = useState<ITaskProps[]>([]);

  const getRowClassName = (params: any) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const getTasks = async () => {
      const response = await getAllTasks();
      console.log('Tasks', response.data);
      setTasksList(response.data);
      setFilteredTasksList(response.data);
    };

    getTasks();
  }, []);

  return (
    <>
      <Layout>
        {isOpenModal ? (
          <NewTaskModal isOpen={isOpenModal} onClose={handleCloseModal} />
        ) : null}
        <Container>
          <TitlePage>{'Tarefas'}</TitlePage>

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
                onClick={() => setOpenModal(true)}
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
                  filteredTasksList.length > 0
                    ? filteredTasksList.map(task => ({
                        id: task.id,
                        description: task.attributes.description,
                        deadline: task.attributes.deadline,
                        status: task.attributes.status,
                      }))
                    : []
                }
                columns={[
                  {
                    flex: 1,
                    field: 'editar',
                    headerName: 'Editar',
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
                    field: 'customer',
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
                    field: 'deadline',
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
