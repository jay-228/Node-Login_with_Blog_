const CheckRole = (req, res, next) => {
  const { role } = req.user;

  if (role != "admin") {
    return res.status(401).json({ msg: "Access denied" });
  }
  next();
};

module.exports = CheckRole;
