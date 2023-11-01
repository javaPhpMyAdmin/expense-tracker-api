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

  console.log(income);
  res.send("ok");
};

export default addIncome;
