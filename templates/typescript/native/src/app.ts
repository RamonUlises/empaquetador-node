import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import finalhandler from 'finalhandler';
import { IncomingMessage, ServerResponse } from 'http';

const middleware = (req: IncomingMessage, res: ServerResponse, next: () => void) => {
  const morganMiddleware = morgan('dev');
  const corsMiddleware = cors();

  morganMiddleware(req, res, (err) => {
    if (err) return finalhandler(req, res)(err);
    corsMiddleware(req, res, (err: any) => {
      if (err) return finalhandler(req, res)(err);
      next();
    });
  });
};

// Create the server
const server = http.createServer((req, res) => {
  middleware(req, res, () => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World!' }));
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corrido en http://localhost:${PORT}`);
});