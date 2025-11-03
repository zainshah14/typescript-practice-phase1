"use strict";
// import { createServer } from 'node:http';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/health', (req, res) => {
    return res.status(200).json({ ok: true });
});
app.use(todo_1.default);
app.use((err, req, res, _next) => {
    res.status(500).json({ message: 'An error occurred!' });
});
// Export the app for testing
exports.default = app;
// // Only start the server if this file is run directly (not imported)
// if (process.env.NODE_ENV !== 'test') {
//   app.listen(3000, () => {
//     console.log('Server running on port 3000');
//   });
// }
