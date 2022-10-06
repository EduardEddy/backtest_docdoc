import { Router } from 'express';

import AuthCtrl from '../../controllers/auth/auth.ctrl';
import { validationLogin } from '../../middleware/validation/auth/login.middleware';

const authCtrl = new AuthCtrl;

const router = Router();

router.post('/', validationLogin, authCtrl.login);

export default router;