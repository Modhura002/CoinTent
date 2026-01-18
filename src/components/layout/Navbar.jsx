import { Link } from "react-router-dom";

function Navbar() {
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
      {/* LOGO */}
      <img
        src="/cointent-logo.svg"
        alt="CoinTent"
        style={{ height: "32px" }}
      />

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "32px" }}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/dashboard">Dashboard</NavItem>
        <NavItem to="/expenses">Expenses</NavItem>
        <NavItem to="/planner">Planner</NavItem>
        <NavItem to="/insights">Insights</NavItem>
      </div>
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        color: "#a3a3a3",
        textDecoration: "none",
        fontSize: "14px",
      }}
    >
      {children}
    </Link>
  );
}

export default Navbar;
