import {check,validationResult} from 'express-validator'
const signUpValidator = [
    check('firstName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is required!')
    .isString()
    .withMessage('Must be a valid name!')
    .isLength({ min: 3, max: 20 })
    .withMessage('Name must be within 3 to 20 character!'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email!'),
    check('password')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Password is empty!')
      .isLength({ min: 8, max: 20 })
      .withMessage('Password must be 3 to 20 characters long!'),
    check('confirmPassword')
      .trim()
      .not()
      .isEmpty()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Both password must be same!');
        }
        return true;
      }),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        next();
    },
  ];
  export default signUpValidator