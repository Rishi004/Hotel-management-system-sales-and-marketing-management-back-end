const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/showcurrent", (req, res) => {
    db.currentplans.findAll().then((incomes) => res.send(incomes));
});

router.post("/addcurrent", async (req, res) => {
    db.currentplans
        .create({
            planname: req.body.planname,
            date: req.body.date,
            budget: req.body.budget,
            reason: req.body.reason,
        })
        .then((submitCurrent) => res.send(submitCurrent));
});

module.exports = router;
