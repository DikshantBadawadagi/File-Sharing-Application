const   express  = require("express");
const uploadImage  = require("../controller/image-controller.js");

const router = express.Router();

router.post('/upload',uploadImage);

module.exports = router; 