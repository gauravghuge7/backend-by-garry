import multer from "multer";

const storage = multer.diskStorage({
      destination:function(req, file, cb)
      {
            cb(null,"./public/temp")
      },
      Filename: function (req, file, cb) {
            cb(null,"File.originalname")
      }

})

export const upload = multer({
      storage,
})