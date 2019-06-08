const express = require('express');
const router = express.Router();

const remindRequest = require("./../services/remind");

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});

router.post("/remind", async (req, res) => {

	const response = {};

	try {
		await remindRequest(req);
		response["success"] = true;
		response["msg"] = "Thank you for interest. You will receive a email when applications start.";
	} catch (e) {
		response["success"] = false;
		response["msg"] = e.message;
	}
	res.json(response);
});

/*router.get("/remind", async (req, res) => {
	res.render("captcha", {RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY});
});*/

module.exports = router;
