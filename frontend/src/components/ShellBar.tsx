import "@ui5/webcomponents-icons/dist/employee-lookup.js";
import "@ui5/webcomponents-icons/dist/log.js";
import {
  Avatar,
  Icon,
  Input,
  ListItemStandard,
  ShellBar,
  ShellBarItem,
} from "@ui5/webcomponents-react";

function CustomShellBar() {
  return (
    <ShellBar
      logo={
        <img
          alt="SAP Logo"
          src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
        />
      }
      menuItems={
        <>
          <ListItemStandard data-key="1">Menu Item 1</ListItemStandard>
          <ListItemStandard data-key="2">Menu Item 2</ListItemStandard>
          <ListItemStandard data-key="3">Menu Item 3</ListItemStandard>
        </>
      }
      notificationsCount="10"
      onLogoClick={function _s() {}}
      onMenuItemClick={function _s() {}}
      onNotificationsClick={function _s() {}}
      onProductSwitchClick={function _s() {}}
      onProfileClick={function _s() {}}
      onSearchButtonClick={function _s() {}}
      primaryTitle="Shell Bar"
      profile={
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png" />
        </Avatar>
      }
      searchField={<Input icon={<Icon name="search" />} showClearIcon />}
      secondaryTitle="Secondary Title"
      showNotifications
      showProductSwitch
    >
      <ShellBarItem count="3" icon="add" text="ShellBarItem" />
    </ShellBar>
  );
}

export default CustomShellBar;
