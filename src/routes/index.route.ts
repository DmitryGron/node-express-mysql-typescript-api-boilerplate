import * as express from 'express';

import authRoute from './user/auth.route';

const router = express.Router();

router.use('/user/auth', authRoute);

export default router;
