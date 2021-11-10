import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/dashboard");
    }
  }, [history]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  const handlegoogle = async () => {
    setLoading(true);
    await signInWithGoogle();
    history.push("/");
  };
  return (
    <div>
      <Card className="w-50 mx-auto mt-5">
        <Card.Body>
          <h2 className="text-center mb-4">Create an account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100 mt-3 btn-warning" type="submit">
              {loading ? "Creating user.." : "Register"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
        <br />
        <button className="mt-3 btn-warning p-1 px-5" onClick={handlegoogle}>
          SignUp with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
