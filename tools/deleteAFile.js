import {unlinkSync as uls, existsSync as es }  from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deleteAFile = (req, res) => {
    const {fileName} = req.params
    const filepath = path.join(__dirname,'../root',fileName)

        uls(filepath)
        res.status(200).json({
            "message": "File deleted successfully"
          })
};
export default deleteAFile;
