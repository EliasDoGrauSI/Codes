import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/usersControllers.js";


const usersRoutes = Router();

usersRoutes.get("/users/:id", getUserById)
usersRoutes.get("/users", getAllUsers)





export default usersRoutes