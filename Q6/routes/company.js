
var express = require('express');
var router = express.Router();

router.get("/login", (req, res)=>{
    res.render("company/login");
});
router.get("/home", (req, res)=>{
    res.render("company/home");
});

router.get("/info", (req, res)=>{
    res.render("company/info");
});
router.get("/location", (req, res)=>{
    res.render("company/location");
});


module.exports = router;