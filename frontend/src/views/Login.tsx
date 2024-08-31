import { FlexBox, Title } from "@ui5/webcomponents-react";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { setAuthUser, refreshAccessToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    async function tryRefreshAccessToken() {
      const response = await refreshAccessToken();
      if (response?.access) {
        setAuthUser(response.access);
        navigate("/app");
      }
    }
    tryRefreshAccessToken();
  }, [navigate]);

  return (
    <FlexBox
      alignItems="Center"
      direction="Column"
      justifyContent="Center"
      style={{
        flex: 1,
        margin: "auto 0",
        padding: "3rem 0",
      }}
    >
      <Title level="H2" style={{ margin: "2rem 0" }}>
        Login
      </Title>
      <LoginForm />
    </FlexBox>
  );
}

export default Login;
