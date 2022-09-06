const jwt = require("jsonwebtoken");
const User = require('./models/user');
const Authenticateduser = (req, res, next) => {
  const token = req.header("AUTHORIZATION");
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "please Authenticate with Valid Token",
    });
  }
  jwt.verify(token, process.env.JWTPRIVATEKEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "u must logged in" });
    }
    const { id } = payload.user;
    User.findById(id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};

module.exports = Authenticateduser;