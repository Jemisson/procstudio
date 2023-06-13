import React, { useState } from 'react';

import { colors, Flex } from '@/styles/globals';
import { Container, Input, OptionsArea } from './styles';

import {
  Box,
  FormControl,
  FormControlLabel,
  Typography,
  Radio,
  Select,
  MenuItem,
} from '@mui/material';

const instalmentOptions = [
  '1x',
  '2x',
  '3x',
  '4x',
  '5x',
  '6x',
  '7x',
  '8x',
  '9x',
  '10x',
  '11x',
  '12x',
];

const StepTwo = () => {
  const [isVisibleOptionsArea, setIsVisibleOptionsArea] = useState(false);

  const [WorkOrSuccess, setWorkOrSuccess] = useState('');
  const [installments, setInstallments] = useState(false);
  const [valueOfFixed, setValueOfFixed] = useState();

  const [numberOfInstallments, setNumberOfInstallments] = React.useState('');

  const handleCategorySelection = (value: string) => {
    setWorkOrSuccess(value);
    value.search('proBono') < 0
      ? setIsVisibleOptionsArea(true)
      : setIsVisibleOptionsArea(false);
  };

  const renderSubjectContent = () => {
    switch (WorkOrSuccess) {
      case 'work':
        return (
          <FormControl>
            <Box>
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Valor de Honorários Fixos'}
              </Typography>
              <Flex style={{ flexDirection: 'column' }}>
                <FormControl sx={{ width: '314px' }}>
                  <Input
                    placeholder="00"
                    min="0"
                    value={valueOfFixed}
                    onInput={(e: any) => {
                      e.target.value = e.target.value.replace(/[^0-9.,]/g, '');
                    }}
                    onBlur={e => console.log('onBlur', e.target.value)}
                  />
                </FormControl>
              </Flex>
            </Box>
            {WorkOrSuccess.search('work') >= 0 ? (
              <>
                {installments ? (
                  <Box sx={{ marginTop: '16px' }}>
                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                      {'Parcelamento'}
                    </Typography>
                    <Flex style={{ flexDirection: 'column' }}>
                      <FormControl sx={{ width: '314px', height: '40px' }}>
                        <Select
                          displayEmpty
                          value={numberOfInstallments}
                          inputProps={{
                            style: {
                              height: '100%',
                              color: colors.icons,
                            },
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 32 * 4.5 + 8,
                                width: 250,
                              },
                            },
                          }}
                          onChange={(e: any) =>
                            setNumberOfInstallments(e.target.value)
                          }
                        >
                          <MenuItem disabled value="">
                            <>{'Número de Parcelas'}</>
                          </MenuItem>
                          {instalmentOptions.map((value: string) => (
                            <MenuItem key={value} value={value}>
                              {value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Flex>
                  </Box>
                ) : null}
              </>
            ) : null}
          </FormControl>
        );
      case 'success':
        return (
          <FormControl>
            <Box>
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Valor de Honorários Percentuais'}
              </Typography>
              <Flex style={{ flexDirection: 'column' }}>
                <FormControl sx={{ width: '314px' }}>
                  <Input
                    placeholder="00"
                    min="0"
                    value={valueOfFixed}
                    onInput={(e: any) => {
                      e.target.value = e.target.value.replace(/[^0-9.,]/g, '');
                    }}
                    onBlur={e => console.log('onBlur', e.target.value)}
                  />
                </FormControl>
              </Flex>
            </Box>
          </FormControl>
        );
      case 'both':
        return (
          <FormControl>
            <Box>
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Valor de Honorários Fixos'}
              </Typography>
              <Flex style={{ flexDirection: 'column' }}>
                <FormControl sx={{ width: '314px' }}>
                  <Input
                    placeholder="00"
                    min="0"
                    value={valueOfFixed}
                    onInput={(e: any) => {
                      e.target.value = e.target.value.replace(/[^0-9.,]/g, '');
                    }}
                    onBlur={e => console.log('onBlur', e.target.value)}
                  />
                </FormControl>
              </Flex>
            </Box>
            {WorkOrSuccess.search('both') >= 0 ? (
              <>
                {installments ? (
                  <Box sx={{ marginTop: '16px' }}>
                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                      {'Parcelamento'}
                    </Typography>
                    <Flex style={{ flexDirection: 'column' }}>
                      <FormControl sx={{ width: '314px', height: '40px' }}>
                        <Select
                          displayEmpty
                          value={numberOfInstallments}
                          inputProps={{
                            style: {
                              height: '100%',
                              color: colors.icons,
                            },
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 32 * 4.5 + 8,
                                width: 250,
                              },
                            },
                          }}
                          onChange={(e: any) =>
                            setNumberOfInstallments(e.target.value)
                          }
                        >
                          <MenuItem disabled value="">
                            <>{'Número de Parcelas'}</>
                          </MenuItem>
                          {instalmentOptions.map((value: string) => (
                            <MenuItem key={value} value={value}>
                              {value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Flex>
                  </Box>
                ) : null}
              </>
            ) : null}
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Flex
        style={{ flexDirection: 'row', marginTop: '16px', minHeight: '348px' }}
      >
        <Flex style={{ flexDirection: 'column', width: '400px' }}>
          <Typography
            variant="h6"
            sx={{ marginBottom: '8px', fontSize: '1.1rem' }}
          >
            {'Honorários de Trabalho ou Êxito'}
          </Typography>
          <Box>
            <FormControlLabel
              control={
                <Radio
                  value="work"
                  checked={WorkOrSuccess === 'work'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleCategorySelection(e.target.value)
                  }
                />
              }
              label="Trabalho"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Radio
                  value="success"
                  checked={WorkOrSuccess === 'success'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleCategorySelection(e.target.value)
                  }
                />
              }
              label="Êxito"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Radio
                  value="both"
                  checked={WorkOrSuccess === 'both'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleCategorySelection(e.target.value)
                  }
                />
              }
              label="Ambos"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Radio
                  value="proBono"
                  checked={WorkOrSuccess === 'proBono'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleCategorySelection(e.target.value)
                  }
                />
              }
              label="Pro-bono"
            />
          </Box>
          {WorkOrSuccess.search('work') >= 0 ||
          WorkOrSuccess.search('both') >= 0 ? (
            <Box sx={{ marginTop: '16px' }}>
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Parcelamento'}
              </Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value={true}
                      checked={installments}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInstallments(e.target.value === 'true')
                      }
                    />
                  }
                  label="Sim"
                />
              </Box>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value={false}
                      checked={!installments}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInstallments(e.target.value === 'true')
                      }
                    />
                  }
                  label="Não"
                />
              </Box>
            </Box>
          ) : null}
        </Flex>
        {isVisibleOptionsArea ? (
          <OptionsArea>{renderSubjectContent()}</OptionsArea>
        ) : null}
      </Flex>
    </Container>
  );
};

export default StepTwo;
