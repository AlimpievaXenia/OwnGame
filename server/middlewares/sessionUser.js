exports.sessionUser = (req, res, next) => {
  res.locals.user = req.session?.user;
  // if (res.locals.user) console.log(res.locals.user);
  next();
};
