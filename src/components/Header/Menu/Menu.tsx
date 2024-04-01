import { Context, FC, useContext } from "react";
import { DataContext } from "../../../context/ContextData";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Props {
	handleOpenMenu?: () => void;
}

export const Menu: FC<Props> = ({ handleOpenMenu }) => {
	const { menu } = useContext(DataContext)!;

	const location = useLocation();

	const navigate = useNavigate();

	const handleCheckRedirect = (params: string) => {
		if (location.pathname !== "/") {
			navigate(`${"/"}${params}`);
			return;
		}
	};

	return (
		<ul className="nav">
			{menu.map((item) => {
				if (item.type === "link-router") {
					return (
						<li className="nav__item">
							<Link
								className="nav__link"
								to={item.href}
								onClick={handleOpenMenu}
							>
								{item.title}
							</Link>
						</li>
					);
				}
				return (
					<li
						className="nav__item"
						onClick={() => handleCheckRedirect(item.href)}
					>
						<a className="nav__link" href={item.href} onClick={handleOpenMenu}>
							{item.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
};
