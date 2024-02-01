const express=require('express')
const app=express()
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()
app.use(express.json())

app.post('/post',async(req,res)=>{
    const {title,content,authorEmail}=req.body
    const result=await prisma.post.create({
        data:{
            title,
            content,
            author:{connect:{email:authorEmail}}
        }
    })
    res.json(result)
})

app.listen(3000,()=>{
    console.log('Port running on port 3000');
})