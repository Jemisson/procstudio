import React, { useState, ChangeEvent } from 'react';

import {
  Box,
  Modal,
  Radio,
  Button,
  TextField,
  Typography,
  RadioGroup,
  Autocomplete,
  FormControlLabel,
} from '@mui/material';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { IModalProps } from '@/interfaces/IModal';

import { colors, Flex } from '@/styles/globals';
import { Content, Title, Input, DeadlineContainer } from './styles';
import { MdClose } from 'react-icons/md';

const NewTaskModal = ({ isOpen, onClose }: IModalProps) => {
  const currentDate = dayjs();
  const [highPriority, setHighPriority] = useState('');
  const [deadlineDate, setDeadlineDate] = useState(currentDate);

  const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHighPriority(event.target.value);
  };

  return (
    <Modal open={isOpen} onClose={onClose} style={{ overflowY: 'auto' }}>
      <Content>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Title style={{ fontSize: '28px' }}>{'Nova Tarefa'}</Title>
          <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
            <MdClose size={26} />
          </Box>
        </Box>

        <Box mt={'20px'} width={'464px'}>
          <Box mr={'16px'}>
            <Flex className="inputContainer">
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Descrição'}
              </Typography>
              <Input>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={() => console.log('Descrição')}
                  placeholder="Informe o título do trabalho"
                />
              </Input>
            </Flex>

            <Flex className="inputContainer">
              <Flex>
                <Typography mb={'8px'} variant="h6">
                  {'Cliente'}
                </Typography>
              </Flex>

              <Autocomplete
                disablePortal={true}
                autoComplete
                options={[]}
                renderInput={params => (
                  <TextField {...params} placeholder="Informe o Cliente" />
                )}
                noOptionsText="Nenhuma Cliente Encontrado"
                onChange={() => console.log('Cliente')}
              />
            </Flex>

            <Flex className="inputContainer">
              <Flex>
                <Typography mb={'8px'} variant="h6">
                  {'Responsavel'}
                </Typography>
              </Flex>

              <Autocomplete
                disablePortal={true}
                autoComplete
                options={[]}
                renderInput={params => (
                  <TextField
                    {...params}
                    placeholder="Selecione um Responsavel"
                  />
                )}
                noOptionsText="Nenhuma Responsavel Encontrado"
                onChange={() => console.log('Responsavel')}
              />
            </Flex>

            <Flex className="inputContainer">
              <Flex>
                <Typography mb={'8px'} variant="h6">
                  {'Trabalho'}
                </Typography>
              </Flex>

              <Autocomplete
                disablePortal={true}
                autoComplete
                options={[]}
                renderInput={params => (
                  <TextField {...params} placeholder="Selecione um Trabalho" />
                )}
                noOptionsText="Nenhuma Trabalho Encontrado"
                onChange={() => console.log('Trabalho')}
              />
            </Flex>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DeadlineContainer>
                <Box>
                  <Flex>
                    <Typography mb={'8px'} variant="h6">
                      {'Prazo de Entrega'}
                    </Typography>
                  </Flex>
                  <DatePicker
                    format="DD/MM/YYYY"
                    value={deadlineDate}
                    minDate={currentDate}
                    onChange={(newValue: any) => {
                      if (newValue < currentDate) {
                        setDeadlineDate(currentDate);
                      } else {
                        setDeadlineDate(newValue);
                      }
                    }}
                  />
                </Box>
                <Box>
                  <Flex>
                    <Typography mb={'8px'} variant="h6">
                      {'Prioridade'}
                    </Typography>
                  </Flex>
                  <RadioGroup
                    value={highPriority}
                    sx={{ flexDirection: 'row' }}
                    onChange={handlePriorityChange}
                  >
                    <FormControlLabel
                      value="normal"
                      control={<Radio />}
                      label="Normal"
                    />
                    <FormControlLabel
                      value="alta"
                      control={<Radio />}
                      label="Alta"
                    />
                  </RadioGroup>
                </Box>
              </DeadlineContainer>
            </LocalizationProvider>
          </Box>
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

export default NewTaskModal;
