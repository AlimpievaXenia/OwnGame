import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './QuestionsTable.css';
import { CardModal } from '../Modal/Modal'
import Typography from '@mui/material/Typography';

function QuestionsTable() {
  const [selectedQ, setSelectedQ] = React.useState(null)
  const questionData = useSelector(store => store.questions)
  const dispatch = useDispatch();

  const questions = React.useMemo(() => {
    const hash = {};

    questionData.forEach((q) => {
      if (hash[q['Category.topic']]) {
        hash[q['Category.topic']].push(q)
      } else {
        hash[q['Category.topic']] = [q];
      }
    });

    return Object.entries(hash)

  }, [questionData])


  const handleSelectQ = (qData) => setSelectedQ(qData)
  const handleCloseModal = () => setSelectedQ(null);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === selectedQ.answer;

    dispatch({ type: 'UPDATE_SCORE', payload: { isCorrect, points: selectedQ.points } })
  }

  React.useEffect(() => {
    axios.get('http://localhost:3001/questions')
      .then(({ data: payload }) => {
        dispatch({ type: 'SET_QUESTIONS', payload })
      })
  }, [])

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className='table'>
            <TableRow>
              <TableCell className='category' align="center">Тема</TableCell>
              <TableCell className="headerText" align="center">200</TableCell>
              <TableCell className="headerText" align="center">400</TableCell>
              <TableCell className="headerText" align="center">600</TableCell>
              <TableCell className="headerText" align="center">800</TableCell>
              <TableCell className="headerText" align="center">1000</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions?.map(([category, questions]) => (
              <TableRow
                key={category}
              >
                <TableCell  component="th" scope="row" className='category'>
                  {category}
                </TableCell>
                {questions
                  .sort((q1, q2) => q1.points - q2.points)
                  .map((q, i) => <TableCell className='tableCell' key={i} onClick={() => handleSelectQ(q)} >
                    <Typography className='text'>
                      {q.points}
                    </Typography>
                  </TableCell>
                  )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CardModal
        question={selectedQ}
        onClose={handleCloseModal}
        onClick={handleAnswerClick}
      />
    </div>
  );
}

// const TableCell = styled(TableCell)(({ theme }) => ({

//   color: '#FFD700',
//   fontSize: 40,
//   width: 200,
//   height: 200
// }));

// const TableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

export default QuestionsTable
