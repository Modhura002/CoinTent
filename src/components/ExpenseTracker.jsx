import { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function addExpense() {
    if (!amount || !category) return;

    setExpenses([...expenses, { amount, category }]);
    setAmount("");
    setCategory("");
  }

  return (
    <div className="card" style={{ marginTop: "30px" }}>
      <h3>Add Expense</h3>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br /><br />

      <button onClick={addExpense}>Add</button>

      <ul>
        {expenses.map((e, index) => (
          <li key={index}>
            ₹{e.amount} – {e.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
