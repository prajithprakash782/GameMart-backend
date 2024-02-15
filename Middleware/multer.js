
// import multer

const multer = require('multer')

const path = require("path");

//storage-is uset tro create multer storage
const storage =multer.diskStorage({
//it have two keys -=first one is destination and the  second one is filename
//destrinsation where the file is stored 
// filename the name in which the file is stored in the destination
destination:'./uploads',

//filename-the name in which 
filename: (req, file, cb) => {
    console.log(file);
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }

})
//filefilter





//create multerconfiguration
const multerConfig = multer({
    storage
})

//export multer

module.exports = multerConfig