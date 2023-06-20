import React, { useState, ChangeEvent } from 'react';
import { colors, DescriptionText, Flex } from '@/styles/globals';

import { Container, Input } from './styles';
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { SwitchProps } from '@mui/material/Switch';
import Switch from '@mui/material/Switch';
import { MdOutlineAddCircle, MdOutlineInfo } from 'react-icons/md';

import CustomTooltip from '../../Tooltip';
import RepresentationModal from '@/components/RepresentativeModal';

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

const StepFour = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [listOffices, setListOffices] = useState([
    { id: 1, name: 'Escritório Soma' },
    { id: 2, name: 'Contabilidade Souza' },
    { id: 3, name: 'Lima e Chaves Advocacia' },
    { id: 4, name: 'Facilite Comtabilidade' },
    { id: 5, name: 'Liberato Advocacia' },
  ]);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSwitchOn(event.target.checked);
  };

  return (
    <>
      <RepresentationModal isOpen={openModal} onClose={handleClose} />
      <Container>
        <Box mr={'16px'}>
          <Flex className="inputContainer">
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Escritório'}
            </Typography>

            <Autocomplete
              multiple
              limitTags={1}
              id="multiple-limit-tags"
              options={listOffices}
              getOptionLabel={option => option.name}
              renderInput={params => (
                <TextField
                  placeholder="Selecione um Escritório"
                  {...params}
                  error={false}
                />
              )}
              sx={{ width: '398px', backgroundColor: 'white', zIndex: 1 }}
              noOptionsText="Nenhum Escritório Encontrado"
              onChange={(event, value) => console.log('Valor do Input', value)}
            />
          </Flex>

          <Flex className="inputContainer">
            <Flex>
              <Typography mb={'8px'} variant="h6">
                {'Advogado Responsável'}
              </Typography>
            </Flex>

            <Autocomplete
              disablePortal={true}
              autoComplete
              options={[]}
              renderInput={params => (
                <TextField {...params} placeholder="Informe o Advogado" />
              )}
              noOptionsText="Nenhuma Advogado Encontrado"
              onChange={() => console.log('Advogado')}
            />
          </Flex>

          <Flex className="inputContainer">
            <Flex>
              <Typography mb={'8px'} variant="h6">
                {'Atendimento Inicial'}
              </Typography>
            </Flex>

            <Autocomplete
              disablePortal={true}
              autoComplete
              options={[]}
              renderInput={params => (
                <TextField {...params} placeholder="Selecione um E-mail" />
              )}
              noOptionsText="Nenhuma Email Encontrado"
              onChange={() => console.log('Email')}
            />
          </Flex>

          <Flex className="inputContainer">
            <Flex>
              <Typography mb={'8px'} variant="h6">
                {'Estagiários da Procuração'}
              </Typography>
            </Flex>

            <Autocomplete
              disablePortal={true}
              autoComplete
              options={[]}
              renderInput={params => (
                <TextField {...params} placeholder="Selecione um Estagiário" />
              )}
              noOptionsText="Nenhuma Estagiário Encontrado"
              onChange={() => console.log('Estagiário')}
            />
          </Flex>

          <Box mt={'16px'}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: colors.white,
                height: 36,
              }}
              onClick={() => setOpenModal(true)}
            >
              <DescriptionText style={{ cursor: 'pointer' }} className="ml-8">
                {'Adicionar Indicação'}
              </DescriptionText>
              <MdOutlineAddCircle size={20} />
            </Button>
          </Box>
        </Box>
        <Box>
          <Flex className="inputContainer">
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Comissão'}
            </Typography>
            <Flex style={{ gap: '16px' }}>
              <Input>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Informe o Valor"
                />
              </Input>
              <Input>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Informa a porcentagem"
                />
              </Input>
            </Flex>
          </Flex>

          <Flex className="inputContainer">
            <Flex>
              <Typography mb={'8px'} variant="h6">
                {'Bacharéis/Paralegais da Procuração'}
              </Typography>
            </Flex>

            <Autocomplete
              disablePortal={true}
              autoComplete
              options={[]}
              renderInput={params => (
                <TextField {...params} placeholder="Selecione um Paralegal" />
              )}
              noOptionsText="Nenhuma Paralegal Encontrado"
              onChange={() => console.log('Paralegal')}
            />
          </Flex>

          <Flex className="inputContainer">
            <Flex
              style={{
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" style={{ height: '40px' }}>
                {'Outorgado por Advogado Parceiro?'}
              </Typography>
              <CustomTooltip
                title="O termo 'Outorgado por Advogado Parceiro' indica que a autorização vem de um advogado que é parceiro do escritório, fortalecendo a colaboração e a sinergia entre eles."
                placement="right"
              >
                <span
                  style={{
                    display: 'flex',
                  }}
                >
                  <MdOutlineInfo style={{ marginLeft: '8px' }} size={20} />
                </span>
              </CustomTooltip>
            </Flex>

            <Box>
              <Flex style={{ height: '40px', alignItems: 'center' }}>
                <IOSSwitch checked={isSwitchOn} onChange={handleSwitchChange} />
              </Flex>
              {isSwitchOn && (
                <Flex className="inputContainer">
                  <Flex>
                    <Typography mb={'8px'} variant="h6">
                      {'Advogado'}
                    </Typography>
                  </Flex>

                  <Autocomplete
                    disablePortal={true}
                    autoComplete
                    options={[]}
                    renderInput={params => (
                      <TextField
                        {...params}
                        placeholder="Selecione um Advogado Externo"
                      />
                    )}
                    noOptionsText="Nenhuma Advogado Encontrado"
                    onChange={() => console.log('Advogado')}
                  />
                </Flex>
              )}
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default StepFour;
