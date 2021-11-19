import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Authentication.css";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login, signInWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };
  const handlegoogle = async () => {
    setLoading(true);
    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
      history.push("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  };
  return (
    <>
      <Card className="w-50 mx-auto mt-5 page_font">
        <Card.Body>
          <h2 className="text-center mb-4">Sign in to your account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <button className="w-100 mt-3 features_button" type="submit">
              {loading ? "Logging you in" : "Log In"}
            </button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Create an account?
        <Link className="page_font" to="/signup">
          Sign Up
        </Link>
        <br />
        <button className="signup_google" onClick={handlegoogle}>
          SignUp with Google
        </button>
        <br />
        <div className="mt-3 p-1 px-5 page_font">
          <Link>Go back home</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
