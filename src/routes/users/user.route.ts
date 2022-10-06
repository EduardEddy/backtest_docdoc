import { Router } from 'express';

import UserCtrl from '../../controllers/user/user.ctrl';
import { validationCreate } from '../../middleware/validation/user/create.middleware';

const userCtrl = new UserCtrl;

const router = Router();

router.get('/:id', userCtrl.show);
router.get('/', userCtrl.index);
router.post('/', validationCreate, userCtrl.create);

export default router;