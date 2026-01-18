import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: "700px" }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "24px" }}>
          Financial clarity for creators.
        </h1>

        <p style={{ fontSize: "18px" }}>
          CoinTent helps independent creators plan content, track spending,
          and make smarter financial decisions—without spreadsheets or stress.
        </p>
      </motion.div>
    </Layout>
  );
}

export default Home;
