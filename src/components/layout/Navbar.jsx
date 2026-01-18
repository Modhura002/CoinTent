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
        alt="CoinTent Logo"
        style={{ height: "32px" }}
      />

      {/* MENU */}
      <div style={{ display: "flex", gap: "32px", color: "#a3a3a3" }}>
        <span>Dashboard</span>
        <span>Expenses</span>
        <span>Planner</span>
        <span>Insights</span>
      </div>
    </div>
  );
}

export default Navbar;
