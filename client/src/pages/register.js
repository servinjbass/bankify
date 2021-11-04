import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { register } from "../data/dal";
import useInput from "../hooks/useInput";
import Input from "../components/Input";
import { useContext } from "react";
import ctx from "../context";

export default function Register() {
  const { setUser, createAlert } = useContext(ctx);
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  const resetForm = () => {
    name.clear();
    email.clear();
    password.clear();
    confirmPassword.clear();
  };

  const submitForm = (event) => {
    event.preventDefault();
    let pwdMatch = password.value === confirmPassword.value;

    if (!pwdMatch) {
      confirmPassword.clear();
      createAlert("Passwords do not match!", "danger");
      return;
    }

    let stateProps = {createAlert,resetForm};

    register(email.value,password.value,stateProps)
  };

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem", }}>
        <Card.Header>
          <h2>Register Account</h2>
        </Card.Header>
        <Card.Body className="justify-content-center align-item-center">
          <Form onSubmit={submitForm} className="mb-3">
            <Form.Group className="mb-3">
              <Form.Label className="mb-3">Name</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Account Name"
                className="mb-3"
              > 
              <Input label="Account Name" ac="name" state={name}/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Input label="Email" ac="email" state={email}/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <FloatingLabel
                controlId="floatingPassword"
                label="New Password"
                className="mb-3"
              >
                <Input 
                  type="password"
                  label="New Password" 
                  ac="new-password" 
                  state={password}   
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Confirm Password"
                className="mb-3"
              >
                <Input 
                  type="password"
                  label="Confirm Password" 
                  ac="confirm-password" 
                  state={confirmPassword}   
                />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit">Register</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
