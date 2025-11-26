import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bookRoutes from './Routes/book.js'
import authorRoutes from './Routes/author.js'
import GenreRoutes from './Routes/genre.js'
dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())
app.use("/api",bookRoutes)
app.use("/api/auth",authorRoutes)
app.use("/api/genre",GenreRoutes)
const PORT=3030;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
