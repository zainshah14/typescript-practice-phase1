"use strict";
// import express from 'express';
// import { addTodo } from '../data.js';
// // import { Request, Response } from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// function handlePostTodos(req: Request, res: Response) {
// }
// router.post('/todos', (req, res) => {
// try {
//     console.log({req})
//     const text = req.body.text;
//     const addedTodo = addTodo(text);
//     res.json({ message: 'Todo added!', todo: addedTodo});
// } catch (e){
//     res.json({ message: 'Todo not added!', todo: 'some error stuff'});
// }
// console.log({req})
// });
// router.get('/hello', (req, res) => {
//         res.json({ message: 'Hello back'});
// });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.post('/todos', (req, res) => {
    const text = req.body.text;
    const addedTodo = (0, data_1.addTodo)(text);
    res.json({ message: 'Todo added!', todo: addedTodo });
});
router.get('/todos', (req, res) => {
    const todos = (0, data_1.getTodos)();
    res.json({ todos });
});
router.get('/todos/:id', (req, res) => {
    const todo = (0, data_1.getTodo)(+req.params.id);
    res.json({ todo });
});
router.patch('/todos/:id', (req, res) => {
    const updatedTodo = (0, data_1.updateTodo)(+req.params.id, req.body.text);
    res.json({ message: 'Todo updated', todo: updatedTodo });
});
router.delete('/todos/:id', (req, res) => {
    (0, data_1.removeTodo)(+req.params.id);
    res.json({ message: 'Todo deleted!' });
});
exports.default = router;
