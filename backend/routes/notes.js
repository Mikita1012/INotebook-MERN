const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        b: "note module",
        number: 66
    }
    res.json(obj);
})

module.exports = router
