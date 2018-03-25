import { Router } from 'express';
import { callProcedure } from '../config/db';
import authorCall from '../calls/authors';

let router = Router();

router.get('/', authorCall.all);
router.get('/:id', authorCall.read);
router.post('/', authorCall.create);
router.put('/:id', authorCall.update);
router.delete('/:id', authorCall.destroy);

export default router;