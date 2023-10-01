import React, { memo } from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className="header">
      <div className="app-container">
        <h1 className="brand">CUSTOMERS</h1>
      </div>
    </Navbar>
  );
}

export default memo(Header);
