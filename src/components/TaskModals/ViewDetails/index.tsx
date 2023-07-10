import React, { useState } from 'react';

import { Box, Modal, Button, Typography } from '@mui/material';

import { Content, Title, BoxContent } from './styles';

import { MdClose, MdOutlineContentCopy, MdOutlineCheck } from 'react-icons/md';
import { colors } from '@/styles/globals';

const ViewDetails = ({ isOpen, onClose, details }: any) => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);

    setTimeout(() => {
      setCopiedText('');
    }, 2000);
  };

  return (
    <Modal open={isOpen} style={{ overflowY: 'auto' }}>
      <Content>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Title style={{ fontSize: '28px' }}>{'Detalhes da Tarefa'}</Title>
          <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
            <MdClose size={26} />
          </Box>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Descrição'}</Typography>
            {copiedText === details.description && copiedText ? (
              <MdOutlineCheck size={16} color={colors.green} />
            ) : (
              <MdOutlineContentCopy
                size={16}
                cursor={'pointer'}
                onClick={() => {
                  if (details.description) {
                    handleCopyClick(details.description);
                  }
                }}
              />
            )}
          </BoxContent>
          <Typography variant="subtitle1">{details.description}</Typography>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Cliente'}</Typography>
            {copiedText === details.customer_id && copiedText ? (
              <MdOutlineCheck size={16} color={colors.green} />
            ) : (
              <MdOutlineContentCopy
                size={16}
                cursor={'pointer'}
                onClick={() => {
                  if (details.customer_id) {
                    handleCopyClick(details.customer_id);
                  }
                }}
              />
            )}
          </BoxContent>
          <Typography variant="subtitle1">{details.customer_id}</Typography>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Responsavel'}</Typography>
            {copiedText === details.profile_admin_id && copiedText ? (
              <MdOutlineCheck size={16} color={colors.green} />
            ) : (
              <MdOutlineContentCopy
                size={16}
                cursor={'pointer'}
                onClick={() => {
                  if (details.profile_admin_id) {
                    handleCopyClick(details.profile_admin_id);
                  }
                }}
              />
            )}
          </BoxContent>
          <Typography variant="subtitle1">
            {details.profile_admin_id}
          </Typography>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Trabalho'}</Typography>
            {copiedText === details.work_id && copiedText ? (
              <MdOutlineCheck size={16} color={colors.green} />
            ) : (
              <MdOutlineContentCopy
                size={16}
                cursor={'pointer'}
                onClick={() => {
                  if (details.work_id) {
                    handleCopyClick(details.work_id);
                  }
                }}
              />
            )}
          </BoxContent>
          <Typography variant="subtitle1">{details.work_id}</Typography>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Prazo de Entrega'}</Typography>
          </BoxContent>
          <Typography variant="subtitle1">{details.deadline}</Typography>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Prioridade'}</Typography>
          </BoxContent>
          <Typography variant="subtitle1">{details.priority}</Typography>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Status'}</Typography>
          </BoxContent>
          <Typography variant="subtitle1">{details.status}</Typography>
        </Box>

        <Box mt={'16px'}>
          <BoxContent>
            <Typography variant="h6">{'Comentários'}</Typography>
            {copiedText === details.comment && copiedText ? (
              <MdOutlineCheck size={16} color={colors.green} />
            ) : (
              <MdOutlineContentCopy
                size={16}
                cursor={'pointer'}
                onClick={() => {
                  if (details.comment) {
                    handleCopyClick(details.comment);
                  }
                }}
              />
            )}
          </BoxContent>
          <Typography variant="subtitle1">{details.comment}</Typography>
        </Box>

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
            {'Fechar'}
          </Button>
        </Box>
      </Content>
    </Modal>
  );
};

export default ViewDetails;
