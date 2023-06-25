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
  TextareaAutosize,
} from '@mui/material';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { z } from 'zod';
import { IModalProps } from '@/interfaces/IModal';

import { colors, Flex } from '@/styles/globals';
import { Content, Title, Input, DeadlineContainer } from './styles';
import { MdClose } from 'react-icons/md';

const schema = z.object({
  description: z.string().nonempty('Campo obrigatório'),
  client: z.string().nonempty('Campo obrigatório'),
  responsible: z.string().nonempty('Campo obrigatório'),
  work: z.string().nonempty('Campo obrigatório'),
});

const NewTaskModal = ({ isOpen, onClose }: IModalProps) => {
  const currentDate = dayjs();

  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [responsible, setResponsible] = useState('');
  const [work, setWork] = useState('');

  const [deadlineDate, setDeadlineDate] = useState(currentDate);
  const [highPriority, setHighPriority] = useState('normal');

  const [status, setStatus] = useState('pending');
  const [comments, setComments] = useState('');

  const [errors, setErrors] = useState<any>({});

  const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHighPriority(event.target.value);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      description,
      client,
      responsible,
      work,
    };

    try {
      schema.parse(data);
      console.log(data);
      onClose();
    } catch (error: any) {
      const newErrors = error.formErrors.fieldErrors;
      const errorObject: { [key: string]: string } = {};

      for (const field in newErrors) {
        if (Object.prototype.hasOwnProperty.call(newErrors, field)) {
          errorObject[field] = newErrors[field][0] as string;
        }
      }

      setErrors(errorObject);
    }
  };

  return (
    <Modal open={isOpen} style={{ overflowY: 'auto' }}>
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

        <Flex style={{ justifyContent: 'space-between' }}>
          <Box width={'464px'}>
            <Box mr={'16px'}>
              <Flex className="inputContainer">
                <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                  {'Descrição'}
                </Typography>
                <Input>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Informe a Descrição da Tarefa"
                    error={!!errors.description && !description}
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
                    <TextField
                      {...params}
                      error={!!errors.client && !client}
                      placeholder="Informe o Cliente"
                      onChange={e => setClient(e.target.value)}
                    />
                  )}
                  noOptionsText="Nenhuma Cliente Encontrado"
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
                      error={!!errors.responsible && !responsible}
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
                    <TextField
                      {...params}
                      placeholder="Selecione um Trabalho"
                      error={!!errors.work && !work}
                    />
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

          <Box width={'464px'} mt={'16px'}>
            <Box>
              <Flex>
                <Typography mb={'8px'} variant="h6">
                  {'Status'}
                </Typography>
              </Flex>
              <RadioGroup
                value={status}
                sx={{ flexDirection: 'row' }}
                onChange={handleStatusChange}
              >
                <FormControlLabel
                  value="pending"
                  control={<Radio />}
                  label="Pendente"
                />
                <FormControlLabel
                  value="late"
                  control={<Radio />}
                  label="Atrasado"
                />
                <FormControlLabel
                  value="finished"
                  control={<Radio />}
                  label="Finalizado"
                />
              </RadioGroup>
            </Box>
            <Box mt={'16px'}>
              <Flex>
                <Typography mb={'8px'} variant="h6">
                  {'Comentários'}
                </Typography>
              </Flex>
              <TextareaAutosize
                value={comments}
                onChange={e => setComments(e.target.value)}
                className="comment-input"
              />
            </Box>
          </Box>
        </Flex>

        <Box width={'100%'} display={'flex'} justifyContent={'end'} mt={'16px'}>
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
            onClick={handleSubmit}
          >
            {'Salvar'}
          </Button>
        </Box>
      </Content>
    </Modal>
  );
};

export default NewTaskModal;
