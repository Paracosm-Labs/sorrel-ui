import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import WalletConnect from '../components/walletconnect';
import DappLogo from "../img/sorrel-logo.png";

const NavMenu = () => {
  return (
    <>
    <div className="container justify-content-center py-1">
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="/">
          <img src={DappLogo}
            width="60"
            height="60"
            alt="Sorrel Banq"
          />
          <b className="px-2">Sorrel</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto mb-lg-0 nav-items">
            <NavItem>
              <Nav.Link href="/accounts">Accounts</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/vaults">Vaults</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/bridge">Bridge</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/addons">Addons</Nav.Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <WalletConnect></WalletConnect>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  );
};

export default NavMenu;