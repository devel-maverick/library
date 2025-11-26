import prisma from '../model/db.js'
export const getallbook=async(req,res)=>{
    const allbooks=await prisma.book.findMany()
    if(allbooks.length===0){
        return res.status(400).json("book not found")
    }
    res.status(200).json(allbooks)
}
export const getbookbyId=async(req,res)=>{
    const id=req.params.id
    if(!id){
        return res.status(400).json("id not provided")
    }
    const book=await prisma.book.findUnique({
        where:{
            id:id
        }
    })
    if(!book){
        return res.status(400).json("book not found")
    }
    res.status(200).json(book)
}
export const createBook=async(req,res)=>{
  try {
    const body = req.body;
    console.log(body);
    
    if(!body.title || !body.authorId){
      return res.status(400).json({error: "title and authorId are required"})
    }
    const authorExists = await prisma.author.findUnique({
      where: {
        id: parseInt(body.authorId)
      }
    })
    
    if(!authorExists){
      return res.status(404).json({error: `Author with id ${body.authorId} not found. Please create the author first.`})
    }
    
    const result = await prisma.book.create({
      data: {
        title: body.title,
        summary: body.summary,
        isbn: body.isbn,
        url: body.url,
        authorId: parseInt(body.authorId),
        genres: {
          create: body.genres?.map(genreId => ({
            genre: {
              connect: {
                id: parseInt(genreId)
              }
            }
          })) || []
        }
      }
    })
    res.status(201).json(result);
  } catch(error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
}