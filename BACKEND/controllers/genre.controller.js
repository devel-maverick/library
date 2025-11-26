import prisma from "../model/db.js"
export const genrecreate=async(req,res)=>{
    try {
        const body=req.body
        if(!body || !body.name || !body.url){
            return res.status(400).json({error: "name and url are required"})
        }
        const result=await prisma.genre.create({
            data: {
                name: body.name,
                url: body.url
            }
        })
        res.status(201).json(result)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}
export const genreget=async(req,res)=>{
    try {
        const id=Number(req.params.id)
        if(!id){
            return res.status(400).json({error: "id are required"})
        }
        const result=await prisma.genre.findFirst({
            where:{
                id:id
            }
        })
        res.status(201).json(result)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}
export const genreupdate=async(req,res)=>{
    try {
        const id=Number(req.params.id)
        const body=req.body
        if(!body || !body.name || !body.url ||!id){
            return res.status(400).json({error: "name and url are required"})
        }
        const result=await prisma.genre.update({
            where:{id:id},
            data: body
        })
        res.status(201).json(result)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}
export const genredelete=async(req,res)=>{
    try {
        const id=Number(req.params.id)
        const result=await prisma.genre.delete({
            where:{id:id}
        })
        res.status(201).json(result)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}