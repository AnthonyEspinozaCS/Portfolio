import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstName, lastName, company, email, password);
  };

  return (
    <section className="login">
      <form
        onSubmit={handleSubmit}
        className="login__form container ff-sans-normal fs-medium">
        <h3 className="fs-header-m ff-serif text-accent-dark-g bold">Sign up</h3>
        <div className="login__name">
          <div className="login__name--half">
            <label>First Name:</label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="login__name--half">
            <label>Last Name:</label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>
        <label>Company:</label>
        <input
          type="text"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
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
          Sign up
        </button>
        <p className="center">
          Already have an account?{" "}
          <Link
            to="/signup"
            className="text-accent">
            Login
          </Link>
        </p>
        {error && <div className="error">{error}</div>}
      </form>
    </section>
  );
};

export default Signup;
