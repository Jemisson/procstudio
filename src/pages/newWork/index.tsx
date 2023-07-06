import React, { useState, useRef } from 'react';
import { withAuth } from '@/middleware/withAuth';

import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

import { MdClose } from 'react-icons/md';
import { DescriptionText } from '@/styles/globals';
import {
  Container,
  ContentContainer,
  Title,
  Content,
} from '@/styles/newWorkStyles';

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
  Notification,
  ModalFinalizeRegistration,
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
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [skipped, setSkipped] = useState(new Set<number>());

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');

  const handleCloseModal = () => {
    setOpenModal(false);
    setFinished(false);
    setActiveStep(4);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSave = async (title: string) => {
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error: any) {
      setMessage(error.message);
      setType('error');
      setOpenSnackbar(true);
    }

    setLoading(false);
    setOpenModal(false);
  };

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
    if (isStepSkipped(currentStep)) {
      newSkipped = new Set<number>(newSkipped.values());
      newSkipped.delete(currentStep);
    }

    setCurrentStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
    scrollToTop();
  };

  const handleBack = () => {
    setCurrentStep(prevActiveStep => prevActiveStep - 1);
    scrollToTop();
  };

  const openSaveModal = () => {
    setActiveStep(steps.length);
    setFinished(true);
    setOpenModal(true);
    scrollToTop();
  };

  const getStepWidth = (): string => {
    const maxWidth = 400 / steps.length;
    const currentWidth = (activeStep / (steps.length - 1)) * maxWidth;
    return `${currentWidth}%`;
  };

  const renderStepContent = () => {
    switch (currentStep) {
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
      {openModal && (
        <ModalFinalizeRegistration
          isLoading={loading}
          isOpen={openModal}
          onClose={handleCloseModal}
          handleSave={handleSave}
        />
      )}

      {openSnackbar && (
        <Notification
          open={openSnackbar}
          message={message}
          severity={type}
          onClose={handleCloseSnackbar}
        />
      )}

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
                      setCurrentStep(index);
                      scrollToTop();
                    }}
                  >
                    <StepLabel
                      {...labelProps}
                      StepIconProps={{
                        style: {
                          color:
                            activeStep > index
                              ? '#26B99A'
                              : activeStep === index
                              ? '#2A3F54'
                              : '#A8A8B3',
                          cursor: 'pointer',
                        },
                      }}
                    >
                      <DescriptionText
                        style={{
                          color:
                            activeStep > index
                              ? '#26B99A'
                              : activeStep === index
                              ? '#2A3F54'
                              : '#A8A8B3',
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
                  disabled={finished}
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
                {currentStep !== 0 && (
                  <Button
                    disabled={finished}
                    variant="contained"
                    sx={{
                      width: '100px',
                      height: '36px',
                      marginLeft: '16px',
                      borderRadius: '4px',
                    }}
                    color="primary"
                    onClick={() => {
                      setActiveStep(activeStep - 1);
                      handleBack();
                    }}
                  >
                    {'Voltar'}
                  </Button>
                )}
                {currentStep < 4 && (
                  <Button
                    variant="contained"
                    sx={{
                      width: '100px',
                      height: '36px',
                      marginLeft: '16px',
                      borderRadius: '4px',
                    }}
                    color="primary"
                    onClick={() => {
                      setActiveStep(activeStep + 1);
                      handleNext();
                    }}
                  >
                    {'Próximo'}
                  </Button>
                )}
                {currentStep >= 4 && (
                  <Button
                    variant="contained"
                    sx={{
                      width: '100px',
                      height: '36px',
                      marginLeft: '32px',
                      borderRadius: '4px',
                    }}
                    color="secondary"
                    onClick={openSaveModal}
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
