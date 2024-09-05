const {unlinkSync: uls, existsSync: es } = require('fs')
const path = require('path')
const deleteAFile = (req, res) => {
    const {fileName} = req.params
    const filePath = path.join(__dirname, '../root', fileName)
    if(es(filePath)){
        uls(filePath)
        res.status(200).json({
            "message": "File deleted successfully"
        })
    }
    res.status(400).json({
        "message": "File doesn't exists"
    })
};

module.exports = deleteAFile;
