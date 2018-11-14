var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgObj = {
            burger: data
        };
        console.log(burgObj)
        res.render("index", burgObj)
    });
});

router.post("/api/burger", function(req, res) {
    burger.create(["burger_name", "eaten"], [req.body.burger_name, req.body.eaten], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.update(
        {
            eaten: req.body.burger_eaten
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;