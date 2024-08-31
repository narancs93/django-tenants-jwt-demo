import { useEffect, PropsWithChildren } from "react";
import useStore from "../stores/appStore";
import { useNavigate } from "react-router-dom";
import { refreshAccessToken } from "../utils/useApi";

function ProtectedRoute(props: PropsWithChildren) {
  const isLoggedIn = useStore().auth.user !== undefined;
  const { api } = useStore();
  const navigate = useNavigate();

  useEffect(
    function () {
      async function checkIsLoggedIn() {
        try {
          await refreshAccessToken(api.setAuth);
        } catch {
          navigate("/");
        }
      }
      checkIsLoggedIn();
    },
    [isLoggedIn, navigate, api.setAuth]
  );

  return isLoggedIn ? props.children : null;
}

export default ProtectedRoute;
