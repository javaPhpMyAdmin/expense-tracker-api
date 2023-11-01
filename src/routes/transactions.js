import express from "express";
import addIncome from "../controllers/income.js";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("from transaction");
});

router.post("/add-income", addIncome);

export default router;
