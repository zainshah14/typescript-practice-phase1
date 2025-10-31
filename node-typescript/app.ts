// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//     console.log(req.method);
//     res.end('Hello World');
// });

// server.listen(3000);

// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//     console.log(req.method);
//     res.json({ message: 'Hellow World!' });
// });

// app.listen(3000);

import express, { Request, Response, NextFunction } from 'express';

import todoRoutes from './routes/todo'

const app = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  return res.status(200).json({ ok: true });
});

app.use(todoRoutes);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({ message: 'An error occurred!' });
});

// Export the app for testing
export default app;

// // Only start the server if this file is run directly (not imported)
// if (process.env.NODE_ENV !== 'test') {
//   app.listen(3000, () => {
//     console.log('Server running on port 3000');
//   });
// }