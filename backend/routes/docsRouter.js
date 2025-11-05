import express from 'express';
import multer from 'multer';
import {addDocs, listDocs} from "../controllers/docsController.js"

const docsRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*40)
        return cb(null,file.fieldname + '-' + uniqueSuffix + `${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads');
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });



const upload = multer({storage:storage, fileFilter})

docsRouter.post("/add",upload.single("image"),addDocs)
docsRouter.get('/listdocs', listDocs)

export default docsRouter;