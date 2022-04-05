import { Routes, Route } from 'react-router-dom';
import Authorization from './components/authorization/Authorization';
import Header from './components/header/Header';
import PersonalPage from './components/personalPage/PersonalPage';
import QuestionsTable from './components/questionsTable/QuestionsTable';
import RatingTable from './components/ratingTable/RatingTable';
import Registration from './components/registration/Registration';
import { useDispatch } from 'react-redux';
import React from 'react';


function App() {
  const d = useDispatch();

  React.useEffect(() => {
    const data = localStorage.getItem("user");

    const user = JSON.parse(data);

    if (user) {
      d({ type: "SET_USER", payload: user })
    }
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/auth/registration' element={<Registration />} />
        <Route path='/auth/authorization' element={<Authorization />} />
        <Route path='/personal' element={<PersonalPage />} />
        <Route path='/rating' element={<RatingTable />} />
        <Route path='/table' element={<QuestionsTable />} />
      </Routes>
    </>
  );
}

export default App;
