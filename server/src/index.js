import express from 'express';
import mysql from 'mysql';
import { urlencoded } from 'express';
import authRouter from './procedures/authors';

let app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/authors', authRouter);

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});