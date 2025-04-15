import express from 'express'

const app = express()

const port = 3000

app.get("/", (req, res)=>{

    res.send("Olá Usuário")

})

app.post("/criarUsuario", () => {})

app.listen(port, ()=>{
    console.log(`App escutando na  porta ${port}`)
})