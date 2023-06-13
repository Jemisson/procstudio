import React, { useState } from 'react';
import { colors, DescriptionText, Flex } from '@/styles/globals';

import { Container } from './styles';
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from '@mui/material';

import { MdOutlineAddCircle } from 'react-icons/md';

const StepFour = () => {
  const [listOffices, setListOffices] = useState([
    { id: 1, name: 'Escritório Soma' },
    { id: 2, name: 'Contabilidade Souza' },
    { id: 3, name: 'Lima e Chaves Advocacia' },
    { id: 4, name: 'Facilite Comtabilidade' },
    { id: 5, name: 'Liberato Advocacia' },
  ]);

  return (
    <Container>
      <span>
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
              {'Adicionar Indicação'}
            </DescriptionText>
            <MdOutlineAddCircle size={20} />
          </Button>
        </Box>
      </span>
    </Container>
  );
};

export default StepFour;
