import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import PersonIcon from '@mui/icons-material/Person';
import GradeIcon from '@mui/icons-material/Grade';
import './Header.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Header() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    localStorage.setItem('user', null)
    dispatch({ type: 'LOGOUT' })
  }
  console.log(user.name)
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar >
            <ButtonGroup className='headerStyle' disableElevation variant="contained">
              <Link to={'/table'}>
                <HomeIcon color="action" fontSize="large" />
              </Link>
              <Link to={'/personal'}>
                <PersonIcon color="action" fontSize="large" />
              </Link>
              <Link to={'/rating'}>
                <GradeIcon color="action" fontSize="large" />
              </Link>
              {user.name && <div>Welcome, {user.name}</div>}
              {!user.name && <Link to={'/auth/registration'}>
                <Button> Зарегистрироваться</Button>
              </Link>}
              {user.name && user.totalScore}
              {!user.name ? <Link to={'/auth/authorization'}>
                <Button>Войти</Button>
              </Link> : <Link to={'/table'}>
                <Button onClick={handleLogoutClick}>Выйти</Button>
              </Link>}
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box >
    </>
  )
}
