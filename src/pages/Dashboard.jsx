import ExpenseTracker from "../components/ExpenseTracker";
import BudgetPlanner from "../components/BudgetPlanner";


function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Dashboard</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        <div className="card">
          <h3>Monthly Budget</h3>
          <p>₹15,000</p>
        </div>

        <div className="card">
          <h3>Total Expenses</h3>
          <p>₹6,200</p>
        </div>

        <div className="card">
          <h3>AI Advice</h3>
          <p>You are spending within limits 👍</p>
          <ExpenseTracker />
          <BudgetPlanner />


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
