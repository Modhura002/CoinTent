import Layout from "../components/layout/Layout";

function Insights() {
  return (
    <Layout>
      <h1 style={{ marginBottom: "20px" }}>Insights</h1>

      <div className="card">
        <p>
          You are currently spending within your estimated budget.
          Future versions will include deeper AI insights and trends.
        </p>
      </div>
    </Layout>
  );
}

export default Insights;
