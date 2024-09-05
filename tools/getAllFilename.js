const {readFileSync: RFS, existsSync: es, readdirSync: RDS} = require('fs')
const path = require('path')
const getAllFiles = (req, res) => {
    const filePath = path.join(__dirname,'../root')
    if(es(filePath)){
        const fileNames = RDS(filePath)
        res.status(200).json({
            "files": fileNames,
        })
    }
    res.status(400).json({
        "message": "Folder does not exist"
    })
};

module.exports = getAllFiles;
