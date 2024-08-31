import {
  Button,
  ButtonDomRef,
  Form,
  FormItem,
  Input,
  MessageStrip,
} from "@ui5/webcomponents-react";
import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginError, setLoginError] = useState<string>();

  const navigate = useNavigate();

  const handleLogin = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<ButtonDomRef, MouseEvent>
  ) => {
    event.preventDefault();
    setLoginError("");

    if (!username) {
      setLoginError("Please enter a username.");
      return;
    }
    if (!password) {
      setLoginError("Password must not be empty.");
      return;
    }

    const { error } = await login(username, password);

    if (error) {
      setLoginError(error);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Form
        style={{ width: "100%", paddingBottom: "2rem", maxWidth: "30rem" }}
        onSubmit={handleLogin}
      >
        <FormItem>
          <Input
            type="Text"
            style={{ width: "100%" }}
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <Input
            type="Password"
            style={{ width: "100%" }}
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </FormItem>
        {loginError && (
          <FormItem>
            <MessageStrip design="Negative" onClose={() => setLoginError("")}>
              {loginError}
            </MessageStrip>
          </FormItem>
        )}
        <FormItem>
          <Button
            type="Submit"
            design="Emphasized"
            style={{ margin: "auto", padding: "0.5rem 1rem" }}
            onClick={(event) => handleLogin(event)}
          >
            Login
          </Button>
        </FormItem>
      </Form>
    </>
  );
}

export default LoginForm;
