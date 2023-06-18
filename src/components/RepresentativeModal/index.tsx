import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Box, Modal, Button } from '@mui/material';
import { IModalProps } from '@/interfaces/IRepresentation';

import { colors } from '@/styles/globals';
import { Content, Title } from './styles';
import { MdClose } from 'react-icons/md';

const RepresentationModal = ({ isOpen, onClose }: IModalProps) => {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const getRowClassName = (params: any) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  const handleRowSelection = (newSelection: any) => {
    setSelectedRows(newSelection);
  };

  return (
    <Modal open={isOpen} onClose={onClose} style={{ overflowY: 'auto' }}>
      <Content>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Title style={{ fontSize: '28px' }}>
            {'Selecione um Representante'}
          </Title>
          <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
            <MdClose size={26} />
          </Box>
        </Box>

        <Box mt={'20px'} sx={{ height: 400 }}>
          <DataGrid
            disableColumnMenu
            checkboxSelection
            onRowSelectionModelChange={handleRowSelection}
            rows={[]}
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
                field: 'email',
                headerName: 'E-mail',
                align: 'center',
                headerAlign: 'center',
                sortable: false,
              },
              {
                flex: 1,
                field: 'city',
                headerName: 'Cidade / Estados',
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
            ]}
            getRowClassName={getRowClassName}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            localeText={{
              noRowsLabel: 'Nenhum representante encontrado',
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

        <Box width={'100%'} display={'flex'} justifyContent={'end'} mt={'20px'}>
          <Button
            color="primary"
            variant="outlined"
            sx={{
              width: '100px',
              height: '36px',
              borderRadius: '4px',
            }}
            onClick={onClose}
          >
            {'Cancelar'}
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '100px',
              height: '36px',
              color: colors.white,
              marginLeft: '16px',
              borderRadius: '4px',
            }}
            color="secondary"
            onClick={() => {
              onClose();
            }}
          >
            {'Salvar'}
          </Button>
        </Box>
      </Content>
    </Modal>
  );
};

export default RepresentationModal;
