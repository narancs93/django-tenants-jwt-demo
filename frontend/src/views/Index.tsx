import { Navigate } from "react-router-dom";
import useStore from "../stores/appStore";

function Index() {
  const isLoggedIn = useStore().auth.user !== undefined;
  return <>{isLoggedIn ? <Navigate to="/app" /> : <Navigate to="/login" />}</>;
}

export default Index;
