import express from 'express'
import { createAuthor } from '../controllers/author.controller.js'
const router=express.Router()
router.post('/createauthor',createAuthor)
export default router