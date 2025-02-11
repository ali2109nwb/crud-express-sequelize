const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoute = require("./routes/productRoute");

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(productRoute);

app.listen(4000, () => {
    console.log('Server running at port 4000');
});
