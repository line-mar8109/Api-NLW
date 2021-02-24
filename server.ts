import express, { request, response } from 'express';


const app = express();
app.use(express.json());

//http://localhost:3333/users
app.get("/users", (request, response) => {
    return response.json({message: "hello world - nlw"});
   
})

app.post("/users", (request, response) =>{
    const users = request.body;
    console.log(request.body);
    return response.status(201).json(users)
})

app.listen(3333, () => {
    console.log("Atenção")
})