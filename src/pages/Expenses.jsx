import Layout from "../components/layout/Layout";
import ExpenseTracker from "../components/ExpenseTracker";

function Expenses() {
  return (
    <Layout>
      <h1 style={{ marginBottom: "20px" }}>Expenses</h1>
      <ExpenseTracker />
    </Layout>
  );
}

export default Expenses;
