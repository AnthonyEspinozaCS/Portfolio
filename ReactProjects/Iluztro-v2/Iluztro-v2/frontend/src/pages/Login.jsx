import { useState } from "react";
import { useLogin } from "../hooks/useLogin.js";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <section className="login">
      <form
        onSubmit={handleSubmit}
        className="login__form container ff-sans-normal fs-medium">
        <h3 className="fs-header-m ff-serif text-accent-dark-g bold">Login</h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          disabled={isLoading}
          className="large-button">
          Log In
        </button>
        <p className="center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-accent">
            Sign up
          </Link>
        </p>
        {error && <div className="error text-white">{error}</div>}
      </form>
    </section>
  );
};

export default Login;
