import { Router } from 'express';
import { callProcedure } from '../config/db';
import bookCall from '../calls/books';

let router = Router();

router.get('/', bookCall.all);
router.get('/:id', bookCall.read);
router.post('/', bookCall.create);
router.put('/:id', bookCall.update);
router.delete('/:id', bookCall.destroy);

export default router;