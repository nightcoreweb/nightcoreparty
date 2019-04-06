const express = require('express');
const cors = require('cors');
const multer = require('multer');
const {google} = require('googleapis');
const {uploadToYoutube} = require('./test.js')

const {initializeAuth} = require('./yt-auth.js');


// Configure server;
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


// Configure upload storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + ".mp3")
  }
})
// var upload = multer({});

// // Set endpoint
// app.post('/upload', upload.single('file'), (req, res) => {

//   res.sendStatus(200);
// });



const uploadConfig = multer({
  limits: {fileSize:10*1024*1024},
    rename: function (fieldname, filename,req, res) {
      file_name = req.body.username + "_" + Date.now() ;
    },
});

let youtube=null;

console.log(`Starting youtube Auth`);
initializeAuth(
  (oAuth2Client)=>{
    youtube = google.youtube({
      version: 'v3',
      auth: oAuth2Client,
    });
    console.log(`SuccessFull`);
  }
);

app.post('/upload', uploadConfig.single('file'),
  (req,res) => 
    {
      uploadToYoutube(youtube,req.file.buffer);
    }
);

app.listen(port, () => {
  console.log(`I'm alive on port: ${port}`);
});








// app.post(
//   '/upload', 
//   uploadConfig,
//   (req, res) => {

//     res.sendStatus(200);
//   });


// (req, res) => {

//     res.sendStatus(200);
//   }







