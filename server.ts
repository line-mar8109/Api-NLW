import express, { request, response } from 'express';


const app = express();


//http://localhost:3333/users
app.get("/users", (request, response) => {
    return response.json({message: "hello world - nlw"});
   
})

app.post("/users", (request, response) =>{
    return response.json({message: "os dados foram salvos com sucesso!"});
})

app.listen(3333, () => {
    console.log("Atenção")
})