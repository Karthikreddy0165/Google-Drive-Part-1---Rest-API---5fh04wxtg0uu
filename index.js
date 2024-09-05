const express = require('express')
const  createAfile =  require('./tools/createAfile.js');
const  getAFile =  require('./tools/getAFile.js');
const getAllFiles = require('./tools/getAllFilename.js');
const updateAfile = require('./tools/updateAfile.js');
const  deleteAFile = require('./tools/deleteAFile.js');
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

module.exports = app
