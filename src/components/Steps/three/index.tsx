import React, { useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Box, LinearProgress, Typography } from '@mui/material';

const StyledDataGrid = styled(DataGrid)`
  .even-row:nth-child(odd) {
    background-color: #e0e0e0;
  }

  .odd-row:nth-child(even) {
    background-color: #eeeeee;
  }
`;

const StepThree = () => {
  const [loading, setLoading] = useState(false);
  const [filteredPowers, setFilteredPowers] = useState([
    {
      id: 1,
      description: 'Poderes Gerais e Substabelecimento',
    },
    {
      id: 2,
      description: 'Poderes Especiais Customizados',
    },
    {
      id: 3,
      description: 'Poderes Tributários',
    },
    {
      id: 4,
      description: 'Poderes Substabelecimento',
    },
    {
      id: 5,
      description: 'Poderes Legislativos',
    },
  ]);

  const getRowClassName = (params: any) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        {'Poderes'}
      </Typography>
      <Box sx={{ height: 500, width: '100%' }}>
        {filteredPowers ? (
          <StyledDataGrid
            disableColumnMenu
            checkboxSelection
            disableRowSelectionOnClick
            loading={loading}
            components={{
              LoadingOverlay: LinearProgress,
            }}
            rows={filteredPowers.map((item: any) => ({
              id: item.id,
              description: item.description,
            }))}
            columns={[
              {
                flex: 1,
                field: 'description',
                headerAlign: 'left',
                headerName: 'Descrição',
              },
            ]}
            getRowClassName={getRowClassName}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            localeText={{
              noRowsLabel: 'Nenhum Poder Encontrado',
              MuiTablePagination: {
                labelRowsPerPage: 'Linhas por página',
                labelDisplayedRows(paginationInfo) {
                  return `${paginationInfo.from}- ${paginationInfo.to} de ${paginationInfo.count}`;
                },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            onRowSelectionModelChange={(data: any) => {
              console.log('Data', data);
            }}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default StepThree;
