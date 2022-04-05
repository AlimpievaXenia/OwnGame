import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './Authorization.css';

export default function Authorization() {
  const [input, setInput] = React.useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const authorizeUser = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const authorization = async () => {
    const data = await fetch('/auth/authorization', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await data.json();

    localStorage.setItem("user", JSON.stringify(result))
    dispatch({ type: 'SET_USER', payload: result })
    navigate('/table')
  }

  return (
    <div className='authForm'>
      <TextField label="Email" variant="filled" name="email" type="email" required onChange={authorizeUser} />
      <TextField label="Пароль" variant="filled" name="password" type="password" required onChange={authorizeUser} />
      <Button onClick={authorization} type="submit" variant="contained" color="primary">
        Войти
      </Button>
    </div>
  )
}
