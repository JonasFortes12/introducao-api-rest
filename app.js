import express from 'express'

import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from "./routes/fornecedores.js"

const app = express()
const port = 3000

// Permitir ler JSON no corpo da requisição
app.use(express.json())

// Adiciona o roteador de usuários
app.use("/usuarios", usuariosRoutes)

// Adiciona o roteador de fornecedores
app.use("/fornecedores", fornecedoresRoutes)


// Rota início
app.get("/", (req, res)=>{

    res.send("Bem vindo a minha API!")

})



app.listen(port, ()=>{
    console.log(`App escutando na  porta ${port}`)
})