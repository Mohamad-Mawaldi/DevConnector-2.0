const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//@route    POST api/users
//@desc     get users
//access    public

router.post(
  '/',
  [
    check('name', 'name is required').notEmpty(),
    check('email', 'Please use a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).json({ status: 'good', reqbody: req.body });
  }
);

module.exports = router;
