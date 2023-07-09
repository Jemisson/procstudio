import React from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} arrow />
))`
  && {
    font-size: 14px;
    background-color: #2a3f54;

    & .MuiTooltip-arrow {
      color: #2a3f54;
    }
  }
`;

export default CustomTooltip;
