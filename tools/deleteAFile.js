import {unlinkSync as uls, existsSync as es }  from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import createAfile from "./createAfile.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deleteAFile = (req, res) => {
    const {fileName} = req.params
    const filepath = path.join(__dirname,'../root',fileName)
    console.log(filepath)
    if(es(filepath)){
        uls(filepath)
        res.status(200).json({
            "message": "File Deleted Successfully"
        })
    }
    else{
        res.status(400).json({
            "message": "File doesn't exists"
        })
    }
};
export default deleteAFile;
