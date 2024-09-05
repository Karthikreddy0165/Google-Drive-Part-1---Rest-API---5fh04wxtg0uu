const {readFileSync: RFS, existsSync: es} = require('fs')
const path = require('path')
const getAFile = ( req, res) => {
    const { fileName} = req.params
    const filePath = path.join(__dirname,`../root`,fileName)
    if(es(filePath)){
        const fileContent = RFS(filePath , 'utf-8')
        res.status(200).json({
            "fileContent": fileContent,
                "message": "File data successfully fetch"
                })
    }
    res.status(400).json({
        "message": "File does not exist"
    })
};

module.exports = getAFile;