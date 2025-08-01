import multer from 'multer'

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter=(req,file,cb)=>{
    const allowedTypes=['image/jpeg','image/png','image/jpg']

    if(allowedTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else {
        cb(new Error("only .jpeg .jpg .png formats are valid"), false)
    }
}

const upload=multer ({storage, fileFilter})

export default upload