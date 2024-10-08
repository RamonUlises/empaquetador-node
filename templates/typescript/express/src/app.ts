import express from 'express';
import morgan, { StreamOptions } from 'morgan';
import router from './router/router';

const app: express.Application = express();
const port: number | string = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev') as express.RequestHandler<StreamOptions>);

app.use(router);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});