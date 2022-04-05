import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';
import { answers } from '../questionsTable/answers';
import './Modal.css';

export const CardModal = ({ onClose, question, onClick }) => {
  if (!question) return null;

  const answerVariants = answers.find((answer) => answer.id === question.id);

  const handleAnswerClick = (variant) => {
    onClick(variant);
    onClose()
  }

  return <Modal
    open={!!question}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className='BoxStyle'>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {question?.title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {Object.values(answerVariants).slice(0, 4).map((variant, index) => {
          return <Button className='answers' key={index} onClick={() => handleAnswerClick(variant)} variant="text">{variant}</Button>
        })}
      </Typography>
    </Box>
  </Modal>
}
