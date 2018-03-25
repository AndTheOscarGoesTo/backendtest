import { Router } from 'express';
import authors from './authors';
import books from './books';

let router = Router();

router.use('/authors', authors);
router.use('/books', books);

export default router;