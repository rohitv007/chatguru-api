const { Router } = require("express");
const { registerUser, loginUser, logoutUser } = require('../controllers/auth.controller');

const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route("/logout").get(logoutUser);

module.exports = router;