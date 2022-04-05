require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');

// here we import all helpers and routers
const { dbConnectCheck } = require('./helpers/dbConnectCheck');
const { sessionUser } = require('./middlewares/sessionUser');
const { sessionConfig } = require('./helpers/sessionConfig');
const authRouter = require('./routers/authRouter');
const questionsRouter = require('./routers/questionsRouter');

const app = express();
const PORT = process.env.PORT ?? 3001;

// app.set('trust proxy', true);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig()));
app.use(sessionUser);

// Here we connect all routers
app.use('/auth', authRouter);
app.use('/questions', questionsRouter);

// app.use('/users', checkUser, usersRouter);

app.listen(PORT, () => {
  console.log(`Server started PORT ${PORT}`);
  dbConnectCheck();
});
