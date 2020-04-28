import * as express from 'express';

import userController from '../../controllers/user.controller';
import { registerSchema, loginSchema } from '../../constants/schema/user.schema';

const router = express.Router();

import { createValidator } from 'express-joi-validation';
const validator = createValidator();

router.post('/register', validator.query(registerSchema), userController.register);
router.post('/login', validator.query(loginSchema), userController.login);
router.get('/me', userController.self);

export default router;
