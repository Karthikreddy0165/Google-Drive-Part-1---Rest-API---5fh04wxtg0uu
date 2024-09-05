const {writeFileSync: WFS, existsSync: es, renameSync: rs} = require('fs')
const path = require('path')
const updateAfile = ( req, res) => {
    const {fileName,fileData} = req.body
    const {updatedFileName, newFileData} = req.body
    const filepath = path.join(__dirname,'../root',fileName)
    if(es(filepath)){
        rs(fileName, updatedFileName)
        const newFilepath = path.join(__dirname,'../root',updatedFileName)
        WFS(newFilepath, fileData)
        res.status(200).json({
            "message": "File updated successfully"
        })
    }
    WFS(filepath, fileData)
    res.status(200).json({
        "message": "File updated successfully"
    })
};

module.exports = updateAfile;
