import express from 'express'
import prisma from './model/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import bookRoutes from './Routes/book.js'
import authorRoutes from './Routes/author.js'
import GenreRoutes from './Routes/genre.js'
dotenv.config()
const app=express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    withCredentials: true
}))

app.use("/api",bookRoutes)
app.use("/api/auth",authorRoutes)
app.use("/api/genre",GenreRoutes)
app.get("/api/genre",async(req,res)=>{
    const result=await prisma.genre.findMany()
    return res.status(200).json(result)
})
const PORT=3030;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
