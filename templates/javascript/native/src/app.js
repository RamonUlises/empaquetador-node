import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';
import { parse } from 'url';

const port = process.env.PORT ?? 3000;

const corsMiddleware = cors();
const morganMiddleware = morgan('dev');

const server = createServer((req, res) => {
  const url = parse(req.url, true);

  corsMiddleware(req, res, () => {
    morganMiddleware(req, res, () => {
      if (url.pathname === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Hola Mundo' }));
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});