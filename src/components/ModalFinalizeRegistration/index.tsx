import React, { ChangeEvent, useState } from 'react';

import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from '@mui/material';
import { IModalProps } from '@/interfaces/IFinalizeRegistration';

import { colors, Flex } from '@/styles/globals';

import { MdClose, MdOutlineInfo } from 'react-icons/md';
import CustomTooltip from '../Tooltip';
import { Content, Title, InputContainer, Input } from './styles';

import { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#1c848f' : '#52A8B1',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#1c848f',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const ModalFinalizeRegistration = ({
  isOpen,
  onClose,
  isLoading,
  handleSave,
}: IModalProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSwitchOn(event.target.checked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Modal open={isOpen} onClose={onClose} style={{ overflowY: 'auto' }}>
      <Content>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Title style={{ fontSize: '28px' }}>{'Finalizar Cadastro'}</Title>
          <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
            <MdClose size={26} />
          </Box>
        </Box>
        <Box width={'100%'} height={'1px'} bgcolor={colors.quartiary} />

        <Box mt={'20px'}>
          <Typography variant="subtitle1">
            {
              'Gostaria de salvar essas informações para facilitar lançamentos futuros?'
            }
          </Typography>

          <Box mt={'8px'} mb={'8px'}>
            <IOSSwitch checked={isSwitchOn} onChange={handleSwitchChange} />
          </Box>
          <InputContainer showInput={isSwitchOn}>
            <Box mt={'16px'}>
              <Flex
                style={{
                  marginBottom: '8px',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">{'Título do Trabalho'}</Typography>
                <CustomTooltip
                  title="Este título será exibido no início do formulário como pré-definições e pode ser selecionado para alterar as informações deste novo trabalho."
                  placement="right"
                >
                  <span
                    aria-label="Título do Trabalho"
                    style={{
                      display: 'flex',
                    }}
                  >
                    <MdOutlineInfo style={{ marginLeft: '8px' }} size={20} />
                  </span>
                </CustomTooltip>
              </Flex>
              <Input>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={handleInputChange}
                  placeholder="Informe o título do trabalho"
                />
              </Input>
            </Box>
          </InputContainer>
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
              handleSave(inputValue);
            }}
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{ color: colors.white }} />
            ) : (
              'Salvar'
            )}
          </Button>
        </Box>
      </Content>
    </Modal>
  );
};

export default ModalFinalizeRegistration;
