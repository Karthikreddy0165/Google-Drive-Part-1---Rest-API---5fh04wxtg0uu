import  {readFileSync as RFS, existsSync as es, readdirSync as RDS} from 'fs'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default getAllFiles;
