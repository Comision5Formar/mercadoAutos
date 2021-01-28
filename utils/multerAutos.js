const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'public/images/cars')
    },
    filename : (req,file,cb) => {
        cb(null, 'auto-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

module.exports = upload;