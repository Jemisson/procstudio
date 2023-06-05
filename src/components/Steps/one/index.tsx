import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import CustomTooltip from '../../Tooltip';
import { MdOutlineInfo } from 'react-icons/md';

import { Container, Flex, InputContainer } from './styles';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  Checkbox,
  Radio,
} from '@mui/material';

const StepOne = () => {
  const [presets, setPresets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([]);

  const [customersList, setCustomersList] = useState([
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  ]);

  const handleProcedureSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedProcedures(prevSelected => [...prevSelected, value]);
    } else {
      setSelectedProcedures(prevSelected =>
        prevSelected.filter(procedure => procedure !== value),
      );
    }
  };

  const handleCategorySelection = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Container>
      <FormControl>
        <Flex style={{ flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ marginBottom: '8px' }}>
            {'Cliente'}
          </Typography>
          <Autocomplete
            multiple
            limitTags={1}
            id="multiple-limit-tags"
            options={customersList}
            getOptionLabel={option => option.title}
            renderInput={params => (
              <TextField
                placeholder="Selecione um Cliente"
                {...params}
                error={false}
              />
            )}
            sx={{ width: '398px', backgroundColor: 'white', zIndex: 1 }}
            noOptionsText="Nenhum Cliente Encontrado"
            onChange={(event, value) => console.log('Valor do Input', value)}
          />
        </Flex>

        <Flex style={{ marginTop: '16px', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ marginBottom: '8px' }}>
            {'Número do Requerimento ou Processo'}
          </Typography>
          <InputContainer>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Informe o Número"
            />
          </InputContainer>
          <Typography variant="caption" sx={{ marginTop: '4px' }} gutterBottom>
            {'* Apenas para casos em que já existe o processo.'}
          </Typography>
        </Flex>

        <Flex
          style={{ width: '398px', flexDirection: 'column', marginTop: '16px' }}
        >
          <Flex
            style={{
              flexDirection: 'row',
              marginBottom: '8px',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">{'Pré-Definições'}</Typography>
            <CustomTooltip
              title="Caso necessite editar um trabalho existente, é possível escolher uma configuração previamente salva para agilizar o processo."
              placement="right"
            >
              <span
                aria-label="Pré-Definições"
                style={{
                  display: 'flex',
                }}
              >
                <MdOutlineInfo style={{ marginLeft: '8px' }} size={20} />
              </span>
            </CustomTooltip>
          </Flex>

          <Autocomplete
            disablePortal={true}
            autoComplete
            options={presets}
            renderInput={params => (
              <TextField
                {...params}
                placeholder="Selecione uma Pré-Definição"
              />
            )}
            noOptionsText="Nenhuma Pré-Definição Encontrada"
            onChange={() => console.log('Pré-Definição')}
          />
        </Flex>

        <Flex
          style={{
            flexDirection: 'row',
            marginBottom: '8px',
            alignItems: 'center',
            marginTop: '16px',
          }}
        >
          <Typography variant="h6">{'Procedimento'}</Typography>
          <CustomTooltip
            title="Escolha o tipo de procedimento que melhor se aplica à situação do novo trabalho."
            placement="right"
          >
            <span
              aria-label="Procedimento"
              style={{
                display: 'flex',
              }}
            >
              <MdOutlineInfo style={{ marginLeft: '8px' }} size={20} />
            </span>
          </CustomTooltip>
        </Flex>

        <Flex
          style={{
            width: '398px',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                value="Administrativo"
                checked={selectedProcedures.includes('Administrativo')}
                onChange={handleProcedureSelection}
              />
            }
            label="Administrativo"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Judicial"
                checked={selectedProcedures.includes('Judicial')}
                onChange={handleProcedureSelection}
              />
            }
            label="Judicial"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Extrajudicial"
                checked={selectedProcedures.includes('Extrajudicial')}
                onChange={handleProcedureSelection}
              />
            }
            label="Extrajudicial"
            style={{
              marginRight: '0px',
            }}
          />
        </Flex>

        <Flex style={{ flexDirection: 'column', marginTop: '16px' }}>
          <Typography variant="h6" sx={{ marginBottom: '8px' }}>
            {'Assunto'}
          </Typography>
          <FormControlLabel
            control={
              <Radio
                value="Administrativo"
                checked={selectedCategory === 'Administrativo'}
                onChange={handleCategorySelection}
              />
            }
            label="Administrativo"
          />
          <Box style={{ marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="Cível"
                  checked={selectedCategory === 'Cível'}
                  onChange={handleCategorySelection}
                />
              }
              label="Cível"
            />
          </Box>
          <Box style={{ marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="Criminal"
                  checked={selectedCategory === 'Criminal'}
                  onChange={handleCategorySelection}
                />
              }
              label="Criminal"
            />
          </Box>
          <Box style={{ marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="Previdenciário"
                  checked={selectedCategory === 'Previdenciário'}
                  onChange={handleCategorySelection}
                />
              }
              label="Previdenciário"
            />
          </Box>
          <Box style={{ marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="Trabalhista"
                  checked={selectedCategory === 'Trabalhista'}
                  onChange={handleCategorySelection}
                />
              }
              label="Trabalhista"
            />
          </Box>
          <Box style={{ marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="Tributário"
                  checked={selectedCategory === 'Tributário'}
                  onChange={handleCategorySelection}
                />
              }
              label="Tributário"
            />
          </Box>
          <Box style={{ marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="Tributário Pis/Cofins insumos"
                  checked={selectedCategory === 'Tributário Pis/Cofins insumos'}
                  onChange={handleCategorySelection}
                />
              }
              label="Tributário Pis/Cofins insumos"
            />
          </Box>
          <Box style={{ marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="Outros"
                  checked={selectedCategory === 'Outros'}
                  onChange={handleCategorySelection}
                />
              }
              label="Outros"
            />
          </Box>
        </Flex>
      </FormControl>
    </Container>
  );
};

export default StepOne;
