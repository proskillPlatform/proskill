const express = require("express");
const router = express.Router();


//initializing the files that contain js, images , css files....
router.use(express.static("public"));

router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/about', (req, res, next) => {
	res.render('about');
});

module.exports = router;