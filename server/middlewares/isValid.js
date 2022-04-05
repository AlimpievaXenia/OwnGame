exports.isValid = (req, res, next) => {
  if (
    req.body?.name
    && req.body?.email
    && req.body?.password
  ) {
    next();
    return;
  }
  res.sendStatus(400);
};
