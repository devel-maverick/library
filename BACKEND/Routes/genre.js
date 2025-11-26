import express from 'express'
import { genrecreate,genreget,genreupdate,genredelete } from '../controllers/genre.controller.js'
const router=express.Router()

router.post('/creategenre',genrecreate)
router.get('/:id',genreget)
router.put('/update/:id',genreupdate)
router.delete('/:id',genredelete)
export default router