import { memo } from "react";
import logo from "../../assets/images/logo.png";
import { Button } from "react-bootstrap";
import groupIcon from "../../assets/images/group.png";

function SideMenu() {
  return (
    <div className="drawer">
      <img src={logo} alt="logo" />
      <Button variant="primary">
        <img src={groupIcon} className="start-icon" alt="Group Icon" /> CUSTOMERS
      </Button>
    </div>
  );
}

export default memo(SideMenu);
