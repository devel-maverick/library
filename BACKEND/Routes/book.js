import express from 'express'
import {getbookbyId,getallbook,createBook} from '../controllers/book.controller.js'
const router = express.Router();

router.get('/books',getallbook)
router.get('/book/:id',getbookbyId)
router.post('/create',createBook)
export default router;

