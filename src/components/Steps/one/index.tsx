import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import CustomTooltip from '../../Tooltip';
import { colors, Flex } from '@/styles/globals';
import { MdOutlineInfo, MdDelete } from 'react-icons/md';

import { IMoreTaxMatter } from '@/interfaces/ISteps';
import Notification from '@/components/Notification';

import {
  Container,
  InputContainer,
  SubjectOptionsArea,
  Input,
  DropContainer,
  FileList,
} from './styles';

import {
  Box,
  FormControl,
  FormControlLabel,
  Typography,
  Checkbox,
  Radio,
  TextField,
  TextareaAutosize,
  Autocomplete,
} from '@mui/material';

const StepOne = () => {
  const [isVisibleOptionsArea, setIsVisibleOptionsArea] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [presets, setPresets] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([]);
  const [customersList, setCustomersList] = useState([
    { id: 19, name: 'The Shawshank Redemption' },
  ]);

  const [civilMatter, setCivilMatter] = useState('');
  const [socialSecurityMatter, setSocialSecurityMatter] = useState('');
  const [laborMatter, setLaborMatter] = useState('');
  const [taxMatter, setTaxMatter] = useState('');
  const [moreTaxMatter, setMoreTaxMatter] = useState<IMoreTaxMatter>();
  const [selectedFile, setSelectedFile] = useState<File[] | null>(null);
  const [anotherSubjects, setAnotherSubjects] = useState('');

  const [compensationsLastYears, setCompensationsLastYears] = useState('');
  const [compensationsExOfficio, setCompensationsExOfficio] = useState('');
  const [hasALawsuit, setHasALawsuit] = useState('');
  const [gainProjection, setGainProjection] = useState();

  const renderDragMessage = (isDragActive: boolean) => {
    if (!isDragActive) {
      return <p>Arraste arquivos aqui...</p>;
    }
    return <p>Solte os arquivos aqui</p>;
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;

    for (let i = 0; i < droppedFiles.length; i++) {
      const droppedFile = droppedFiles[i];
      if (droppedFile) {
        const fileName = droppedFile.name;
        const fileExtension = fileName.split('.').pop()?.toLowerCase();
        const allowedExtensions = ['jpeg', 'jpg', 'png', 'pdf'];

        if (fileExtension && allowedExtensions.includes(fileExtension)) {
          console.log('Arquivo:', droppedFile);
          setSelectedFile(prevSelected => [
            ...(prevSelected || []),
            droppedFile,
          ]);
        } else {
          setOpenSnackbar(true);
        }
      }
    }
  };

  const handleDeleteFile = (fileToDelete: File) => {
    setSelectedFile((prevSelected: any) =>
      prevSelected.filter((file: any) => file !== fileToDelete),
    );
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

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

  const handleCategorySelection = (value: string) => {
    setSelectedSubject(value);

    value.search('min') < 0
      ? setIsVisibleOptionsArea(true)
      : setIsVisibleOptionsArea(false);
  };

  const renderSubjectContent = () => {
    switch (selectedSubject) {
      case 'civel':
        return (
          <FormControl>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Cível-Área'}
            </Typography>
            <Flex style={{ flexDirection: 'column' }}>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="family"
                      checked={civilMatter === 'family'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
                      }
                    />
                  }
                  label="Família"
                />
              </Box>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="consumer"
                      checked={civilMatter === 'consumer'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
                      }
                    />
                  }
                  label="Consumidor"
                />
              </Box>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="civilReparation_propertyDamage_moralDamage"
                      checked={
                        civilMatter ===
                        'civilReparation_propertyDamage_moralDamage'
                      }
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
                      }
                    />
                  }
                  label="Reparação Cível - Danos Materiais - Danos Morais"
                />
              </Box>
            </Flex>
          </FormControl>
        );
      case 'socialSecurity':
        return (
          <FormControl>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Previdenciário-Áreas'}
            </Typography>
            <Flex style={{ flexDirection: 'column' }}>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="tempoDeContribuicao"
                      checked={socialSecurityMatter === 'tempoDeContribuicao'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSocialSecurityMatter(e.target.value)
                      }
                    />
                  }
                  label="Aposentadoria Por Tempo de Contribuição"
                />
              </Box>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="porIdade"
                      checked={socialSecurityMatter === 'porIdade'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSocialSecurityMatter(e.target.value)
                      }
                    />
                  }
                  label="Aposentadoria Por Idade"
                />
              </Box>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="rural"
                      checked={socialSecurityMatter === 'rural'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSocialSecurityMatter(e.target.value)
                      }
                    />
                  }
                  label="Aposentadoria Rural"
                />
              </Box>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="disabilityBenefits"
                      checked={socialSecurityMatter === 'disabilityBenefits'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSocialSecurityMatter(e.target.value)
                      }
                    />
                  }
                  label="Benefícios Por Incapacidade - Auxílio Doença ou Acidente - Inválidez - LOAS"
                />
              </Box>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="socialSecurityReview"
                      checked={socialSecurityMatter === 'socialSecurityReview'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSocialSecurityMatter(e.target.value)
                      }
                    />
                  }
                  label="Revisão de Benefício Previdednciário"
                />
              </Box>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="timeRecognition_adjustment_administrativeServices"
                      checked={
                        socialSecurityMatter ===
                        'timeRecognition_adjustment_administrativeServices'
                      }
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSocialSecurityMatter(e.target.value)
                      }
                    />
                  }
                  label="Reconhecimento de Tempo, Averbação, Serviços Administrativos"
                />
              </Box>
            </Flex>
          </FormControl>
        );
      case 'labor':
        return (
          <FormControl>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Trabalhista-Áreas'}
            </Typography>
            <Flex style={{ flexDirection: 'column' }}>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="laborComplaint"
                      checked={laborMatter === 'laborComplaint'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLaborMatter(e.target.value)
                      }
                    />
                  }
                  label="Reclamatória Trabalhista"
                />
              </Box>
            </Flex>
          </FormControl>
        );
      case 'tributary':
        return (
          <FormControl>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Tributário-Áreas'}
            </Typography>
            <Flex style={{ flexDirection: 'column' }}>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="asphalt"
                      checked={taxMatter === 'asphalt'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTaxMatter(e.target.value)
                      }
                    />
                  }
                  label="Asfalto"
                />
              </Box>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="license"
                      checked={taxMatter === 'license'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTaxMatter(e.target.value)
                      }
                    />
                  }
                  label="Alvará"
                />
              </Box>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="other"
                      checked={taxMatter === 'other'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTaxMatter(e.target.value)
                      }
                    />
                  }
                  label="Outros"
                />
              </Box>
            </Flex>
          </FormControl>
        );
      case 'tributary_pis_CofinsInputs':
        return (
          <FormControl style={{ width: '100%' }}>
            <Flex style={{ alignItems: 'center', width: '100%' }}>
              <Typography variant="h6" sx={{ marginRight: '16px' }}>
                {'Compensações realizadas nos últimos 5 anos:'}
              </Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="yes"
                      checked={compensationsLastYears === 'yes'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCompensationsLastYears(e.target.value)
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
                      value="no"
                      checked={compensationsLastYears === 'no'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCompensationsLastYears(e.target.value)
                      }
                    />
                  }
                  label="Não"
                />
              </Box>
            </Flex>

            <Flex style={{ alignItems: 'center' }}>
              <Typography variant="h6" sx={{ marginRight: '16px' }}>
                {'Compensações de ofício:'}
              </Typography>
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="yes"
                      checked={compensationsExOfficio === 'yes'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCompensationsExOfficio(e.target.value)
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
                      value="no"
                      checked={compensationsExOfficio === 'no'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCompensationsExOfficio(e.target.value)
                      }
                    />
                  }
                  label="Não"
                />
              </Box>
            </Flex>

            <Flex style={{ alignItems: 'center' }}>
              <Typography variant="h6" sx={{ marginRight: '16px' }}>
                {'Possui ação judicial:'}
              </Typography>

              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      value="yes"
                      checked={hasALawsuit === 'yes'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setHasALawsuit(e.target.value)
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
                      value="naoAcaoJudicial"
                      checked={hasALawsuit === 'naoAcaoJudicial'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setHasALawsuit(e.target.value)
                      }
                    />
                  }
                  label="Não"
                />
              </Box>
            </Flex>

            <Flex style={{ flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6">{'Projeção de ganho'}</Typography>

              <FormControl sx={{ width: '314px' }}>
                <Input
                  placeholder="00"
                  min="0"
                  value={gainProjection}
                  onInput={(e: any) => {
                    e.target.value = e.target.value.replace(/[^0-9.,]/g, '');
                  }}
                  onBlur={e => console.log('onBlur', e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex style={{ flexDirection: 'column', marginTop: '16px' }}>
              <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                {'Upload de arquivos'}
              </Typography>

              <FormControl sx={{ width: '100%', height: '100%' }}>
                <Flex style={{ flexDirection: 'row' }}>
                  <Dropzone>
                    {({ getRootProps, getInputProps, isDragActive }) => (
                      <DropContainer>
                        <Flex
                          {...getRootProps()}
                          onDrop={handleDrop}
                          onDragOver={handleDragOver}
                        >
                          <input
                            {...getInputProps({
                              accept: '.jpeg, .jpg, .png, .pdf',
                              multiple: true,
                            })}
                          />
                          {renderDragMessage(isDragActive)}
                        </Flex>
                      </DropContainer>
                    )}
                  </Dropzone>
                  <FileList>
                    {selectedFile && selectedFile.length > 0 ? (
                      selectedFile.map((file, index) => (
                        <div className="fileName" key={index}>
                          <span className="name">{file.name}</span>
                          <MdDelete
                            size={20}
                            color={colors.icons}
                            style={{ cursor: 'pointer', marginLeft: '5px' }}
                            onClick={() => handleDeleteFile(file)}
                          />
                        </div>
                      ))
                    ) : (
                      <Typography variant="caption" sx={{ margin: 'auto' }}>
                        {'Nenhum arquivo selecionado'}
                      </Typography>
                    )}
                  </FileList>
                </Flex>
                <Typography variant="caption" sx={{ marginTop: '8px' }}>
                  {'Formatos aceitos: JPEG, PNG, e PDF.'}
                </Typography>

                <Notification
                  open={openSnackbar}
                  message="Formato de arquivo inválido. Por favor, escolha um arquivo .jpeg, .jpg, .png ou .pdf."
                  severity="error"
                  onClose={handleCloseSnackbar}
                />
              </FormControl>
            </Flex>
          </FormControl>
        );
      case 'other':
        return (
          <FormControl sx={{ width: '100%', height: '100%' }}>
            <Typography variant="h6">{'Descreva a área:'}</Typography>
            <TextareaAutosize
              value={anotherSubjects}
              onChange={e => setAnotherSubjects(e.target.value)}
              className="comment-input"
            />
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <FormControl sx={{ width: '100%' }}>
        {/* Clients, Application or Process Number and Pre-Sets */}
        <span>
          <Flex style={{ flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Cliente'}
            </Typography>
            <Autocomplete
              multiple
              limitTags={1}
              id="multiple-limit-tags"
              options={customersList}
              getOptionLabel={option => option.name}
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
            <Typography
              variant="caption"
              sx={{ marginTop: '4px' }}
              gutterBottom
            >
              {'* Apenas para casos em que já existe o processo.'}
            </Typography>
          </Flex>

          <Flex
            style={{
              width: '398px',
              flexDirection: 'column',
              marginTop: '16px',
            }}
          >
            <Flex
              style={{
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
        </span>

        {/* Procedure - title */}
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
                value="administrative"
                checked={selectedProcedures.includes('administrative')}
                onChange={handleProcedureSelection}
              />
            }
            label="Administrativo"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="judicial"
                checked={selectedProcedures.includes('judicial')}
                onChange={handleProcedureSelection}
              />
            }
            label="Judicial"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="extrajudicial"
                checked={selectedProcedures.includes('extrajudicial')}
                onChange={handleProcedureSelection}
              />
            }
            label="Extrajudicial"
            style={{
              marginRight: '0px',
            }}
          />
        </Flex>

        {/* Subject */}
        <Flex style={{ flexDirection: 'row', marginTop: '16px', flex: 1 }}>
          <Flex style={{ flexDirection: 'column', width: '400px' }}>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Assunto'}
            </Typography>
            <Box>
              <FormControlLabel
                control={
                  <Radio
                    value="administrative"
                    checked={selectedSubject === 'administrative'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Administrativo"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Radio
                    value="civel"
                    checked={selectedSubject === 'civel'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Cível"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Radio
                    value="criminal"
                    checked={selectedSubject === 'criminal'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Criminal"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Radio
                    value="socialSecurity"
                    checked={selectedSubject === 'socialSecurity'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Previdenciário"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Radio
                    value="labor"
                    checked={selectedSubject === 'labor'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Trabalhista"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Radio
                    value="tributary"
                    checked={selectedSubject === 'tributary'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Tributário"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Radio
                    value="tributary_pis_CofinsInputs"
                    checked={selectedSubject === 'tributary_pis_CofinsInputs'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Tributário Pis/Cofins insumos"
              />
            </Box>
            <Box
              style={{
                marginTop: '8px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormControlLabel
                control={
                  <Radio
                    value="other"
                    checked={selectedSubject === 'other'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCategorySelection(e.target.value)
                    }
                  />
                }
                label="Outros"
              />
              <Typography
                variant="caption"
                sx={{ marginTop: '4px' }}
                gutterBottom
              >
                {'* Escolha a área e depois a subárea de atuação.'}
              </Typography>
            </Box>
          </Flex>
          {isVisibleOptionsArea ? (
            <SubjectOptionsArea>{renderSubjectContent()}</SubjectOptionsArea>
          ) : null}
        </Flex>
      </FormControl>
    </Container>
  );
};

export default StepOne;
