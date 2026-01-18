import Layout from "../components/layout/Layout";
import BudgetPlanner from "../components/BudgetPlanner";

function Planner() {
  return (
    <Layout>
      <h1 style={{ marginBottom: "20px" }}>AI Budget Planner</h1>
      <BudgetPlanner />
    </Layout>
  );
}

export default Planner;
