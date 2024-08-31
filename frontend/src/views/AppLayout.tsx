import { FlexBox } from "@ui5/webcomponents-react";
import ShellBar from "../components/ShellBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <FlexBox
      alignItems="Start"
      direction="Column"
      justifyContent="Start"
      style={{ flex: "1", width: "100%" }}
    >
      <ShellBar />
      <Outlet />
    </FlexBox>
  );
}

export default AppLayout;
