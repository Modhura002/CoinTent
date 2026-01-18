function Login({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    onLogin(); // fake login success
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #0f0f0f, #121212)",
      }}
    >
      <div style={{ width: "360px" }} className="card">
        <h2 style={{ marginBottom: "8px" }}>Welcome to CoinTent</h2>
        <p style={{ marginBottom: "24px" }}>
          Sign in to manage your creator finances.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            required
            style={{ marginBottom: "12px" }}
          />
          <input
            type="password"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Sign In
          </button>
        </form>

        <p style={{ marginTop: "16px", fontSize: "14px" }}>
          New here?{" "}
          <span style={{ color: "#c7a17a" }}>
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
