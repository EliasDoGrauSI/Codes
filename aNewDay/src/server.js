import express from "express"
import usersRoutes from "./routes/usersRoutes.js";
import "dotenv/config"
import { getAllUsers } from "./controllers/usersControllers.js";

const app = express();
const PORT = process.env.PORT;


//Rotas Iniciais
app.get("/",(req,res)=>{
    res.status(200).json({
        ok:"Site Funcionando",
        author:"Gabriel Elias"
    })
})


//Rotas De Users
app.use(usersRoutes)
app.use(getAllUsers)


//Iniciando Servidor
app.listen(PORT, ()=>{
    console.log(`O servidor esta rondando no link: https://localhost:${PORT}`)
})