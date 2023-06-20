import React, { useState } from 'react';

import { Flex } from '@/styles/globals';

import { InputContainer } from './styles';

import {
  Box,
  FormControl,
  FormControlLabel,
  Typography,
  Checkbox,
  TextField,
  TextareaAutosize,
} from '@mui/material';

const StepFive = () => {
  const [documentsProduced, setDocumentsProduced] = useState<string[]>([]);
  const [pendingDocuments, setPendingDocuments] = useState<string[]>([]);
  const [gradesInGeneral, setGradesInGeneral] = useState('');

  const handleDocumentsProducedSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, checked } = event.target;

    if (checked) {
      setDocumentsProduced(prevSelected => [...prevSelected, value]);
    } else {
      setDocumentsProduced(prevSelected =>
        prevSelected.filter(document => document !== value),
      );
    }
  };

  const handleDocumentsPendingSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, checked } = event.target;

    if (checked) {
      setPendingDocuments(prevSelected => [...prevSelected, value]);
    } else {
      setPendingDocuments(prevSelected =>
        prevSelected.filter(document => document !== value),
      );
    }
  };

  return (
    <FormControl>
      <Flex
        style={{
          marginTop: '16px',
          flexDirection: 'column',
        }}
      >
        <Flex>
          {/* Documents Produced */}
          <Box mr={'32px'}>
            <Flex
              style={{
                marginBottom: '8px',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">
                {'Documentos a Serem Produzidos'}
              </Typography>
            </Flex>

            <Flex
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="letterOfAttorney"
                    checked={documentsProduced.includes('letterOfAttorney')}
                    onChange={handleDocumentsProducedSelection}
                  />
                }
                label="Procuração"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="termOfWaiver"
                    checked={documentsProduced.includes('termOfWaiver')}
                    onChange={handleDocumentsProducedSelection}
                  />
                }
                label="Termo de Renúncia"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="deficiencyStatement"
                    checked={documentsProduced.includes('deficiencyStatement')}
                    onChange={handleDocumentsProducedSelection}
                  />
                }
                label="Declaração  de Carência"
                style={{
                  marginRight: '0px',
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="termOfResidence"
                    checked={documentsProduced.includes('termOfResidence')}
                    onChange={handleDocumentsProducedSelection}
                  />
                }
                label="Termo de Residência"
                style={{
                  marginRight: '0px',
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="ruralDeclaration"
                    checked={documentsProduced.includes('ruralDeclaration')}
                    onChange={handleDocumentsProducedSelection}
                  />
                }
                label="Declaração Rural"
                style={{
                  marginRight: '0px',
                }}
              />
            </Flex>
          </Box>

          {/* Pending Documents */}
          <Box>
            <Flex
              style={{
                marginBottom: '8px',
              }}
            >
              <Typography variant="h6">{'Documentos Pendentes'}</Typography>
            </Flex>

            <Flex
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="identityDocument"
                    checked={pendingDocuments.includes('identityDocument')}
                    onChange={handleDocumentsPendingSelection}
                  />
                }
                label="Documento de Identidade"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="proofOfAddress"
                    checked={pendingDocuments.includes('proofOfAddress')}
                    onChange={handleDocumentsPendingSelection}
                  />
                }
                label="Comprovante de Residência"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="myINSSPassword"
                    checked={pendingDocuments.includes('myINSSPassword')}
                    onChange={handleDocumentsPendingSelection}
                  />
                }
                label="Senha do Meu INSS"
                style={{
                  marginRight: '0px',
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="medicalDocuments"
                    checked={pendingDocuments.includes('medicalDocuments')}
                    onChange={handleDocumentsPendingSelection}
                  />
                }
                label="Documentos Médicos"
                style={{
                  marginRight: '0px',
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="ruralDocuments"
                    checked={pendingDocuments.includes('ruralDocuments')}
                    onChange={handleDocumentsPendingSelection}
                  />
                }
                label="Documentos Rurais"
                style={{
                  marginRight: '0px',
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="copyOfApplication"
                    checked={pendingDocuments.includes('copyOfApplication')}
                    onChange={handleDocumentsPendingSelection}
                  />
                }
                label="Cópia de Requerimento(s)"
                style={{
                  marginRight: '0px',
                }}
              />
            </Flex>
          </Box>
        </Flex>

        {/* Other Documents */}
        <Box
          mt={'16px'}
          display={'flex'}
          justifyContent={'space-between'}
          gap={'16px'}
        >
          <Box flexDirection={'column'} flex={1}>
            <Box flexDirection={'column'}>
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Outros Documentos Pendentes ou Pendências'}
              </Typography>
              <InputContainer>
                <TextField id="outlined-basic" variant="outlined" />
              </InputContainer>
            </Box>

            <Flex style={{ marginTop: '16px', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Pasta'}
              </Typography>
              <InputContainer>
                <TextField id="outlined-basic" variant="outlined" />
              </InputContainer>
            </Flex>
          </Box>

          <Box flex={1}>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Notas em Geral Sobre o Caso'}
            </Typography>
            <TextareaAutosize
              style={{ width: '100%', height: '136px', resize: 'none' }}
              value={gradesInGeneral}
              onChange={e => setGradesInGeneral(e.target.value)}
              className="comment-input"
            />
          </Box>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default StepFive;
