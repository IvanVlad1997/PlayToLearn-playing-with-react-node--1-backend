const express = require("express");
const router = express.Router();

// middlewares

// controller
const {
    save,
    // read,
    // update,
    remove,
    load,
} = require("../controllers/test");

// routes
router.post("/test", save);
router.get("/test", load);
router.delete('/test', remove);
// router.get("/category/:slug", read);
// router.put("/category/:slug", authCheck, adminCheck, update);
// router.delete("/category/:slug", authCheck, adminCheck, remove);
//

module.exports = router;
