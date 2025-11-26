import prisma from '../model/db.js'

export const createAuthor=async(req,res)=>{
    try {
        const body=req.body
        if(!body || !body.first_name || !body.family_name || !body.name || !body.url){
            return res.status(400).json({error: "first_name, family_name, name, and url are required"})
        }
        const result = await prisma.author.create({
          data: {
            first_name:body.first_name,
            family_name:body.family_name,
            date_of_birth:new Date(body.date_of_birth),
            date_of_death: body.date_of_death ? new Date(body.date_of_death) : null,
            name:body.name,
            url: body.url,
          }
        })
        res.status(201).json(result);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
}