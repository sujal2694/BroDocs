import mongoose from "mongoose";

const DocsSchema = new mongoose.Schema({
    name: {type:String,required:true},
    date: {type:String,required:true},
    image: {type:String,required:true},
})

const docsModel = mongoose.models.doc || mongoose.model("product",DocsSchema)

export default docsModel;