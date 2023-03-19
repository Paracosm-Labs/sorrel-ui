import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import WalletConnect from '../components/walletconnect';
import DappLogo from "../img/sorrel-logo.png";

const NavMenu = () => {
  return (
    <>
    <div className="d-flex bg-sorrel-nav">
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
          <Nav className="m-auto nav-items">
            <NavItem>
              <Nav.Link href="/accounts"><i class="fa-solid fa-user-astronaut"></i>&nbsp;&nbsp;Accounts</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/cards"><i class="fa-solid fa-credit-card"></i>&nbsp;&nbsp;Cards</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/vaults"><i class="fa-solid fa-vault"></i>&nbsp;&nbsp;Vaults</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/bridge"><i class="fa-solid fa-money-bill-transfer"></i>&nbsp;&nbsp;Bridge</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/addons"><i class="fa-solid fa-puzzle-piece"></i>&nbsp;&nbsp;Addons</Nav.Link>
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
    </div>
    </>
  );
};

export default NavMenu;