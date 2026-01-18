import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 40px",
        borderBottom: "1px solid #262626",
      }}
    >
      {/* Logo */}
      <img src="/cointent-logo.svg" alt="CoinTent" style={{ height: "34px" }} />

      {/* Navigation */}
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/expenses">Expenses</NavItem>
        <NavItem to="/planner">Planner</NavItem>
        <NavItem to="/insights">Insights</NavItem>

        {/* Logout */}
        <motion.span
          whileHover={{ scale: 1.1, y: -2 }}
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#e6d3b1",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          Logout
        </motion.span>
      </div>
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <motion.div whileHover={{ scale: 1.1, y: -2 }}>
      <Link
        to={to}
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#e6d3b1",
          textDecoration: "none",
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default Navbar;
