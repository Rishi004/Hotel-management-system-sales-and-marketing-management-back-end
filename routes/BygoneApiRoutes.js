const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/showbygone", (req, res) => {
    db.bygoneplans.findAll().then((incomes) => res.send(incomes));
});

router.post("/addbygone", async (req, res) => {
    let profit = req.body.budgett - req.body.expenses;
    db.bygoneplans
        .create({
            plan: req.body.plan,
            iniDate: req.body.iniDate,
            advisor: req.body.advisor,
            budgett: req.body.budgett,
            expenses: req.body.expenses,
            profit,
        })
        .then((submitCurrent) => res.send(submitCurrent));
});

router.delete("/delete/:id", (req, res) => {
    db.bygoneplans
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(() => res.send("Deleted"));
});

router.put("/edit", (req, res) => {
    let profit = req.body.budgett - req.body.expenses;
    db.bygoneplans
        .update(
            {
                plan: req.body.plan,
                iniDate: req.body.iniDate,
                advisor: req.body.advisor,
                budgett: req.body.budgett,
                expenses: req.body.expenses,
                profit,
            },
            {
                where: { id: req.body.id },
            }
        )
        .then(() => res.send("Updated"));
});

module.exports = router;
