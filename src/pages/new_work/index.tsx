import React, { useState } from 'react';
import { withAuth } from '@/middleware/withAuth';
import Link from 'next/link';

import { colors, DescriptionText } from '@/styles/globals';
import { Container, ContentContainer, Title, Content } from './styles';
import { MdClose } from 'react-icons/md';

import { Flex } from '@chakra-ui/react';

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@mui/material';

import { Layout, Footer } from '@/components';

const steps = [
  'Procedimento/Assunto',
  'Honorários',
  'Poderes',
  'Informações Internas',
  'Informações Adicionais',
];

const NewWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number): boolean => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set<number>(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepWidth = (): string => {
    const maxWidth = 400 / steps.length;
    const currentWidth = (activeStep / (steps.length - 1)) * maxWidth;
    return `${currentWidth}%`;
  };

  return (
    <>
      <Layout>
        <Container>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={'24px'}
            maxW={'1600px'}
          >
            <Title>{'Cadastrando Novo Trabalho'}</Title>
            <Link href="/works">
              <MdClose size={30} />
            </Link>
          </Flex>

          <ContentContainer>
            <Box sx={{ width: '100%' }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps: any = {};
                  const labelProps: any = {};

                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel
                        {...labelProps}
                        StepIconProps={{
                          style: {
                            color: activeStep > index ? '#26B99A' : '#2A3F54',
                          },
                        }}
                      >
                        <DescriptionText
                          style={{
                            color: activeStep > index ? '#26B99A' : '#2A3F54',
                          }}
                        >
                          {label}
                        </DescriptionText>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>

              <Box
                sx={{
                  width: '100% !important',
                  height: '2px',
                  backgroundColor: '#2A3F54',
                  marginTop: '24px',
                }}
              >
                <Box
                  sx={{
                    width: getStepWidth(),
                    height: '100%',
                    maxWidth: '100%',
                    backgroundColor: '#26B99A',
                    transition: 'width 0.3s ease-in-out',
                  }}
                />
              </Box>

              <Content>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>

                <Flex mt={'auto'}>
                  <Flex ml={'auto'}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: '100px',
                        height: '36px',
                        borderRadius: '4px',
                      }}
                      color="primary"
                      onClick={handleBack}
                    >
                      {'Cancelar'}
                    </Button>
                    {activeStep !== 0 && (
                      <Button
                        variant="contained"
                        sx={{
                          width: '100px',
                          height: '36px',
                          marginLeft: '16px',
                          borderRadius: '4px',
                        }}
                        color="primary"
                        onClick={handleBack}
                      >
                        {'Voltar'}
                      </Button>
                    )}
                    {activeStep < 4 && (
                      <Button
                        variant="contained"
                        sx={{
                          width: '100px',
                          height: '36px',
                          marginLeft: '16px',
                          borderRadius: '4px',
                        }}
                        color="primary"
                        onClick={handleNext}
                      >
                        {'Próximo'}
                      </Button>
                    )}
                    {activeStep >= 4 && (
                      <Button
                        variant="contained"
                        sx={{
                          width: '100px',
                          height: '36px',
                          marginLeft: '32px',
                          borderRadius: '4px',
                        }}
                        color="secondary"
                        onClick={() => {
                          console.log('Submit');
                          activeStep <= 4 ? handleNext() : null;
                        }}
                      >
                        <Typography color={'white'}>{'Finalizar'}</Typography>
                      </Button>
                    )}
                  </Flex>
                </Flex>
              </Content>
            </Box>
          </ContentContainer>
        </Container>
        <Footer />
      </Layout>
    </>
  );
};

export default withAuth(NewWork);
