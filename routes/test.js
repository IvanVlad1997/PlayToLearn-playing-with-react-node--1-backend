const express = require("express");
const router = express.Router();

// middlewares

// controller
const {
    save,
    remove,
    load,
} = require("../controllers/test");

// routes
router.post("/test", save);
router.get("/test", load);
router.delete('/test', remove);

// router.delete("/category/:slug", authCheck, adminCheck, remove);
//

module.exports = router;
