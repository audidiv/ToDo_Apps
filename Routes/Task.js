import express from "express";
import { verifyToken } from "../middleware/Verify.js";
import { CreateTask, getTask, getTasks, UpdateTask } from "../Controllers/Task.js";
const Router = express.Router();

Router.post('/create', verifyToken, CreateTask);
Router.put('/:id', verifyToken, UpdateTask);
Router.get('/:id', verifyToken, getTask);
Router.get('/', verifyToken, getTasks);

export default Router;