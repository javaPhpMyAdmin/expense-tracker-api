import Income from "../models/incomeModel.js";

const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = new Income({
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

    await income.save();
    res.send({ message: "Income added Successfully " });
  } catch (e) {
    res.status(500).send({ error: "Server Error " + e.message });
  }
};

const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(200).send({ incomes });
  } catch (e) {
    res.status(500).send({ error: "Server Error " + e.message });
  }
};

const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const income = await Income.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Income Deleted Successfully", income: income });
  } catch (e) {
    res.status(500).send({ error: "Server Error " + e.message });
  }
};

export { addIncome, getIncomes, deleteIncome };
