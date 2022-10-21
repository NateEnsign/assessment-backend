const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);



const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune)


const {getBook, createBook, updateBook, deleteBook} = require('./controller.js')

app.get('/api/books', getBook)

app.post('/api/books', createBook)

app.put('/api/books/:id', updateBook)

app.delete('/api/books/:id', deleteBook)




app.listen(4000, () => console.log("Server running on 4000"));
