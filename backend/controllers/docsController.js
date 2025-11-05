import fs from 'fs';
import docsModel from '../models/docsModel.js';

const addDocs = async (req,res)=>{
    let image_filename = `${req.file.filename}`

    const product = new docsModel({
        name:req.body.name,
        date:req.body.date,
        image:image_filename,
    })
    try {
        await product.save()
        res.json({success:true,message:"Document Added"})
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:"Error"})
    }
}

const listDocs = async(req,res)=>{
    try {
        const products = await docsModel.find({})
        res.json({succes:true,data:products})
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:"error"})
    }
}

export {addDocs, listDocs}