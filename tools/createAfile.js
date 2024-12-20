import {writeFileSync as WFS, existsSync as es} from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const createAfile = ( req, res) => {
    const {fileName,fileData} = req.body
    const filepath = path.join(__dirname,'../root',fileName)
        WFS(filepath, fileData)
        res.status(200).json({
            "message": "File created successfully"
        })
};
export default createAfile;
