const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const createToken = (id, username, user_type_id, maxAge) => {
  return jwt.sign(
    { id, username, user_type_id },
    process.env.ACCESS_PRIVATE_KEY,
    {
      expiresIn: maxAge,
    }
  );
};

module.exports = createToken;
