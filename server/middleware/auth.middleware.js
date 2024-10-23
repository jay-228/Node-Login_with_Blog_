const jwt = require("jsonwebtoken")


const isAuth = (req, res, next) => {
    const { Access_Token } = req.cookies;
    jwt.verify(Access_Token, "vhhjjjkh", function (error, decoded) {
      if (error) {
        return res.status(401).json({ message: "Invalid Token" });
      }
      const user = decoded.userdata;

      req.user = user;
      next();
    });

}

module.exports= isAuth