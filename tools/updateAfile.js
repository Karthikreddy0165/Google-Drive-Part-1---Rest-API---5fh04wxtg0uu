import { writeFileSync as WFS, existsSync as es, renameSync as rs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const updateAfile = (req, res) => {
    const { fileName } = req.params;
    const { updatedFileName, newFileData } = req.body;

    const filePath = path.join(__dirname, '../root', fileName);
    const newFilePath = path.join(__dirname, '../root', updatedFileName);

    if (es(filePath)) {
        rs(filePath, newFilePath);
        WFS(newFilePath, newFileData);
        return res.status(200).json({
            message: "File updated successfully"
        });
    }

    WFS(newFilePath, newFileData);
    res.status(200).json({
        message: "File updated successfully"
    });
};

export default updateAfile;
