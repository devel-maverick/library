import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
app.use(cors)
app.get('/books',(req,res)=>{
    
})
const PORT=3030;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
