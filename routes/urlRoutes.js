import Router from "express"
import { redirectUrl, urlShortner} from "../controller/urlController.js"
import { loginUser } from "../middleware/authenticateUser.js";

const router = Router();

router.route("/shorten").post(loginUser,urlShortner);
router.route("/redirect/:shortUrl").get(loginUser,redirectUrl)

export default router
