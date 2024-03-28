import { FC, useContext } from "react";
import "./navbar.scss";
import { Menu } from "../Menu";

export const NavBar: FC = () => {
	return (
		<nav className="wrapper-nav">
			<Menu />
		</nav>
	);
};
