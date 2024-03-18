import { FC } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Logo: FC = () => (
	<div className="logo">
		<Link to="/">
			<img src={logo} alt="logo" />
		</Link>
	</div>
);
