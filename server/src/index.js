import express from 'express';
import apiRouter from './paths/routes';

let app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});