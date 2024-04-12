import { FC } from "react";
import logo from "../../assets/images/logo.webp";
import { Link, useParams } from "react-router-dom";

export const Logo: FC = () => {
	const { lang } = useParams();

	const prefixedLink = lang ? `/${lang}/` : `/`;

	return (
		<div className="logo">
			<Link to={prefixedLink}>
				<img src={logo} alt="logo" />
			</Link>
		</div>
	);
};
