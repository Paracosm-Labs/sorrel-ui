import SideNav,{Toggle, NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
	const navigate = useNavigate();
  return (
  	
	<SideNav onSelect={selected=>{
	 	console.log(selected);
	 	navigate('/'+selected)
	 }} className="navmenu"
	 >	<SideNav.Toggle />
	 	<div className="logo"><h5 className="text-white mx-2 mt-3">Sorrel</h5></div>
		 
		 <SideNav.Nav defaultSelected="accounts">
		 	<NavItem eventKey="home">
		 		<NavIcon><i className="fa-solid fa-home" style={{fontSize: "1.5em"}}></i></NavIcon>
		 		<NavText>Home</NavText>
		 	</NavItem>
		 	<NavItem eventKey="accounts">
		 		<NavIcon><i className="fa-solid fa-user-astronaut" style={{fontSize: "1.5em"}}></i></NavIcon>
		 		<NavText>Accounts</NavText>
		 	</NavItem>
		 	<NavItem eventKey="vaults">
		 		<NavIcon><i className="fa-solid fa-vault" style={{fontSize: "1.5em"}}></i></NavIcon>
		 		<NavText>Vaults</NavText>
		 	</NavItem>
		 	<NavItem eventKey="bridge">
		 		<NavIcon><i className="fa-solid fa-money-bill-transfer" style={{fontSize: "1.5em"}}></i></NavIcon>
		 		<NavText>Bridge</NavText>
		 	</NavItem>
		 </SideNav.Nav>
	 </SideNav>



  );
};

export default NavMenu;
