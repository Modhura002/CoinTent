import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
