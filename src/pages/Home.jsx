import Layout from "../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <div style={{ marginTop: "40px" }}>
        <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
          Your content deserves financial clarity.
        </h1>

        <p style={{ maxWidth: "600px", marginBottom: "40px" }}>
          CoinTent helps creators plan smarter, spend consciously,
          and grow sustainably — without spreadsheets or stress.
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <div className="card" style={{ flex: 1 }}>
            <h3>Track Expenses</h3>
            <p>Understand where your money actually goes.</p>
          </div>

          <div className="card" style={{ flex: 1 }}>
            <h3>Plan Content Budgets</h3>
            <p>Know the cost before you create.</p>
          </div>

          <div className="card" style={{ flex: 1 }}>
            <h3>AI Insights</h3>
            <p>Make mindful, data-backed decisions.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
