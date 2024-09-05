import express from 'express'
import  createAfile from './tools/createAfile.js'
import  getAFile from './tools/getAFile.js'
import  getAllFiles from './tools/getAllFilename.js'
import  updateAfile from './tools/updateAfile.js'
import  deleteAFile from'./tools/deleteAFile.js'
const app = express();
const port = 8000;

app.use(express.json());

app.get('/file', (req, res) => {
  getAllFiles(req,res)
})

app.get('/file/:fileName', (req, res) => {
  getAFile(req,res)
})

app.post('/file/create' , (req, res) =>{
  createAfile(req,res)
})

app.put('/file/:fileName', (req, res) => {
  updateAfile(req,res)
})

app.delete('/file/:fileName', (req, res) =>{
  deleteAFile(req,res)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app
