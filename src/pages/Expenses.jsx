import Layout from "../components/layout/Layout";
import ExpenseTracker from "../components/ExpenseTracker";
import ExpenseGraph from "../components/ExpenseGraph";

function Expenses() {
  return (
    <Layout>
      <h1 style={{ marginBottom: "20px" }}>Expenses</h1>
      <ExpenseTracker />
      <ExpenseGraph />
    </Layout>
  );
}

export default Expenses;
