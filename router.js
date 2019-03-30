const gpio = require("./gpio.js");
const router = require("express").Router();
router.post("/switch", async (req, res, next) => {
	if (req.body.device && req.body.device === "raspi") {
		await gpio.switchOnOff();
		res.json({ success: true });
	} else {
		res.status(400);
	}
});
module.exports = router;