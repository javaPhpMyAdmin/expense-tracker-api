import mongoose, { version } from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 20,
      trim: true,
    },
  },
  { timestamps: true },
  { versionKey: false },
  { __v: { type: Number, select: false } },
  { toObject: { versionKey: false } }
);

// ExpenseSchema.set("toObject", {
//   transform: function (doc, ret) {
//     (this.versionKey = false), (ret.id = ret.id);
//     delete ret.__v;
//   },
// });

export default mongoose.model("Expense", ExpenseSchema);
