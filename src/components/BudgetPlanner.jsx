import { useState } from "react";

function BudgetPlanner() {
  const [posts, setPosts] = useState("");
  const [budget, setBudget] = useState(null);

  function calculateBudget() {
    const estimated = posts * 800;
    setBudget(estimated);
  }

  return (
    <div className="card" style={{ marginTop: "30px" }}>
      <h3>AI Budget Planner</h3>

      <input
        placeholder="Posts per month"
        value={posts}
        onChange={(e) => setPosts(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateBudget}>Estimate Budget</button>

      {budget && <p>Estimated Monthly Budget: ₹{budget}</p>}
    </div>
  );
}

export default BudgetPlanner;
