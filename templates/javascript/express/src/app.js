import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from './router/router.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});