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
      <img src="/cointent-logo.svg" alt="CoinTent" style={{ height: "34px" }} />

      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/dashboard">Dashboard</NavItem>
        <NavItem to="/expenses">Expenses</NavItem>
        <NavItem to="/planner">Planner</NavItem>
        <NavItem to="/insights">Insights</NavItem>

        {/* Profile Avatar */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#c7a17a",
            color: "#0f0f0f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
          }}
        >
          U
        </div>

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
