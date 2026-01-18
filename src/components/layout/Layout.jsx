import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Layout({ children, onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default Layout;
