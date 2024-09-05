const {writeFileSync: WFS, existsSync: es, renameSync: rs} = require('fs')
const path = require('path')
const updateAfile = ( req, res) => {
    const {fileName} = req.params
    const {updatedFileName, newFileData} = req.body
    const filePath = path.join(__dirname,'../root',fileName)
    const newFilePath = path.join(__dirname,'../root',updatedFileName)
    if(es(filePath)){

        rs(filePath, newFilePath)
        WFS(newFilePath , newFileData)
        res.status(200).json({
            "message" :  "File updated successfully"
        })
    }
    WFS(newFilePath , newFileData)
    res.status(200).json({
        "message": "File updated successfully"
    })
};

module.exports = updateAfile