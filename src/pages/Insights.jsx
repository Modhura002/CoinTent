import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

const insights = [
  "Your spending pattern this month shows healthy balance between growth and control.",
  "Ad spending is yielding stable results — consider maintaining this level.",
  "You’ve avoided unnecessary overspending this cycle. Keep it up.",
  "Your expense distribution aligns well with sustainable creator growth."
];

function Insights() {
  const aiInsight = insights[Math.floor(Math.random() * insights.length)];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ marginBottom: "20px" }}>AI Insights</h1>

        <div className="card">
          <p style={{ fontSize: "18px" }}>{aiInsight}</p>
          <p style={{ fontSize: "14px", marginTop: "12px", color: "#c7a17a" }}>
            Generated using CoinTent AI
          </p>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Insights;
