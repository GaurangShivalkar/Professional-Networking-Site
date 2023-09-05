const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");
//const pdf = require('html-pdf');

mongoose.connect("mongodb://127.0.0.1:27017/socialdb2", 
{ useNewUrlParser: true, useUnifiedTopology: true },
 () => {
    console.log("Connected to MongoDB");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//multer 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
//for uploading image

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

//for uploading image

/*create pdf
const pdftt = require('./preview2/preview2');
app.post('api/create-pdf', (req, res) => {
  pdf.create(pdftt(req.body), {}).toFile('result.pdf', (err) => {
      if(err) {
        console.error(err);
      }

      return res.status(200).json("File created successfully")
  });
});*/

/*fetch pdf
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})*/

//locations
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});