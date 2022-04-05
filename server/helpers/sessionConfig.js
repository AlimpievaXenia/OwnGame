const session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports.sessionConfig = () => ({
  store: new FileStore(),
  name: 'session_id', // default connect.sid
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
