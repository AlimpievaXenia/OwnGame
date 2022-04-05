const bcrypt = require('bcrypt');
const { User } = require('../db/models/index');

exports.registerUser = async (req, res) => {
  const {
    name, email, password,
  } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      raw: true,
      where: {
        email,
      },
    });
  } catch (error) {
    res.sendStatus(500);
    return;
  }

  if (existingUser) {
    res.status(409).send('Аккаунт с таким имейлом уже существует');
    return;
  }

  let hash;
  try {
    hash = await bcrypt.hash(password, 10);
  } catch (error) {
    res.status(400).send('error');
    return;
  }

  try {
    const user = await User.create({
      name,
      email,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    req.session.user = user;
    res.json({ user });
  } catch (error) {
    res.sendStatus(400);
  }
};

exports.authorization = async (req, res) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({
      raw: true,
      where: { email },
    });
  } catch (error) {
    return res.sendStatus(400);
  }

  let isSameUser;
  try {
    // const hash = await bcrypt.hash(password, 10);
    isSameUser = await bcrypt.compare(password, user.password);
  } catch (error) {
    return res.status(400).end();
  }

  if (!isSameUser) {
    return res.sendStatus(400);
  }

  req.session.user = user;
  return res.json(user);
};

exports.logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send('error');
      return;
    }

    res
      .clearCookie('session_id')
      .status(200)
      .send('Session closed');
  });
};
