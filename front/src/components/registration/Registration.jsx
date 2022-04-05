import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Registration.css';


export default function Registration() {
  const navigate = useNavigate();
  const [input, setInput] = React.useState({});

  const createUser = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const registration = async () => {
    await fetch('/auth/registration', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigate('/auth/authorization')
  }

  return (
    <div className='regForm'>
      <TextField label="Имя" variant="filled" name="name" required onChange={createUser} />
      <TextField label="Email" variant="filled" name="email" type="email" required onChange={createUser} />
      <TextField label="Пароль" variant="filled" name="password" type="password" required onChange={createUser} />
      <Button onClick={registration} type="submit" variant="contained" color="primary">
        Зарегистрироваться
      </Button>
    </div>
  )
}
