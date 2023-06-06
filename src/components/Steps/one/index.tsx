import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import CustomTooltip from '../../Tooltip';
import { MdOutlineInfo } from 'react-icons/md';

import { IMoreTaxMatter } from '@/interfaces/ISteps';

import { Container, Flex, InputContainer, SubjectOptionsArea } from './styles';
import {
  Box,
  FormControl,
  FormControlLabel,
  Typography,
  Checkbox,
  Radio,
} from '@mui/material';

const StepOne = () => {
  const [presets, setPresets] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
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

  const [civilMatter, setCivilMatter] = useState('');
  const [socialSecurityMatter, setSocialSecurityMatter] = useState('');
  const [laborMatter, setLaborMatter] = useState('');
  const [taxMatter, setTaxMatter] = useState('');
  const [moreTaxMatter, setMoreTaxMatter] = useState<IMoreTaxMatter>();
  const [anotherSubjects, setAnotherSubjects] = useState('');

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
    console.log('Valor do Input', value);
    setSelectedSubject(value);
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
                      checked={civilMatter === 'tempoDeContribuicao'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'porIdade'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'rural'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'disabilityBenefits'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'socialSecurityReview'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                        civilMatter ===
                        'timeRecognition_adjustment_administrativeServices'
                      }
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'laborComplaint'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'asphalt'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'license'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
                      checked={civilMatter === 'other'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCivilMatter(e.target.value)
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
        return <FormControl></FormControl>;
      case 'other':
        return (
          <FormControl>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Descreva a área:'}
            </Typography>
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <FormControl sx={{ width: '100%' }}>
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
        </span>

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

        <Flex style={{ flexDirection: 'row', marginTop: '16px', flex: 1 }}>
          <Flex style={{ flexDirection: 'column', width: '400px' }}>
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {'Assunto'}
            </Typography>
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

          <SubjectOptionsArea>{renderSubjectContent()}</SubjectOptionsArea>
        </Flex>
      </FormControl>
    </Container>
  );
};

export default StepOne;
