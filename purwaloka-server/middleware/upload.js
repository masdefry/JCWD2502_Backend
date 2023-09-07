const {multerUpload} = require('./../lib/multer');

const upload = async(req, res, next) => {
    const result = multerUpload.fields([{name: 'images', maxCount: 3}])
    result(req, res, function(err){
        try {
            if(err) throw err 

        } catch (error) {
            console.log('>>>')
            console.log(error)
        }
    })
}

module.exports = upload