import  {readFileSync as RFS, existsSync as es} from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default getAFile;