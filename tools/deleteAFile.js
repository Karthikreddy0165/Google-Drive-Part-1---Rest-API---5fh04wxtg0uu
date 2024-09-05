import {unlinkSync as uls, existsSync as es }  from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default deleteAFile;
