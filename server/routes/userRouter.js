const Router = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/registartion", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.checkAuth);

module.exports = router;
