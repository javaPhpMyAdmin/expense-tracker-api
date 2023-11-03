import express from "express";
import {
  addIncome,
  getIncomes,
  deleteIncome,
  addExpense,
  getExpenses,
  deleteExpense,
} from "../controllers/index.js";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("from transaction");
});

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense/:id", deleteExpense);

export default router;
