const router = require("express").Router();
const bookRoutes = require("./books");
const apiRoutes = require("./apiRoutes")

// Book routes
router.use("/books", bookRoutes);
router.use("/searchbooks", apiRoutes);

module.exports = router;
