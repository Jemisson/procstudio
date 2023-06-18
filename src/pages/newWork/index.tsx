import React, { useState, useRef } from 'react';
import { withAuth } from '@/middleware/withAuth';

import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

import { DescriptionText } from '@/styles/globals';
import { Container, ContentContainer, Title, Content } from './styles';
import { MdClose } from 'react-icons/md';

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@mui/material';

import {
  Layout,
  Footer,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
} from '@/components';

const steps = [
  'Procedimento/Assunto',
  'Honorários',
  'Poderes',
  'Informações Internas',
  'Informações Adicionais',
];

const NewWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [finished, setFinished] = useState(false);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number): boolean => {
    return skipped.has(step);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set<number>(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
    scrollToTop();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    scrollToTop();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFinished(true);
    scrollToTop();
  };

  const getStepWidth = (): string => {
    const maxWidth = 400 / steps.length;
    const currentWidth = (activeStep / (steps.length - 1)) * maxWidth;
    return `${currentWidth}%`;
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      case 4:
        return <StepFive />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Container ref={pageRef}>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{
            marginBottom: '24px',
            maxWidth: '1600px',
          }}
        >
          <Title>{'Cadastrando Novo Trabalho'}</Title>
          <Link href="/works">
            <MdClose size={30} />
          </Link>
        </Box>

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
                  <Step
                    key={label}
                    {...stepProps}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      if (finished) {
                        return;
                      }
                      setActiveStep(index);
                      scrollToTop();
                    }}
                  >
                    <StepLabel
                      {...labelProps}
                      StepIconProps={{
                        style: {
                          color: activeStep > index ? '#26B99A' : '#2A3F54',
                          cursor: 'pointer',
                        },
                      }}
                    >
                      <DescriptionText
                        style={{
                          color: activeStep > index ? '#26B99A' : '#2A3F54',
                          cursor: 'pointer',
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
              {renderStepContent()}
              <Box className="buttonContainer">
                <Button
                  variant="outlined"
                  sx={{
                    width: '100px',
                    height: '36px',
                    borderRadius: '4px',
                  }}
                  color="primary"
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
                    onClick={(e: any) => handleSubmit(e)}
                  >
                    <Typography color={'white'}>{'Finalizar'}</Typography>
                  </Button>
                )}
              </Box>
            </Content>
          </Box>
        </ContentContainer>
      </Container>
      <Footer />
    </Layout>
  );
};

export default withAuth(NewWork);
