import express from "express";
import { Login, Register } from "../Controllers/User.js";
const Router = express.Router();

Router.post('/login', Login);
Router.post('register', Register);

export default Router;