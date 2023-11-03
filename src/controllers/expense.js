import Expense from "../models/expenseModel.js";

const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = new Expense({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    //validations
    if (!title || !category || !description || !date) {
      return res.status(400).send({
        message: "Please fill all the fields",
      });
    }
    if (!amount === "number" || amount <= 0) {
      return res.status(400).send({
        message: "Please enter a valid and positive amount",
      });
    }
    // if (isNaN(date)) {
    //   return res.status(400).send({
    //     message: "Please enter a valid date",
    //   });
    // }

    await expense.save();
    res.send({ message: "Expense added Successfully " });
  } catch (e) {
    res.status(500).send({ error: "Server Error " + e.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).send({ expenses });
  } catch (e) {
    res.status(500).send({ error: "Server Error " + e.message });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Expense Deleted Successfully", expense: expense });
  } catch (e) {
    res.status(500).send({ error: "Server Error " + e.message });
  }
};

export { addExpense, getExpenses, deleteExpense };
