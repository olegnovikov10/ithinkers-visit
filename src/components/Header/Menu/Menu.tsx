import { Context, FC, useContext } from "react";
import { DataContext } from "../../../context/ContextData";

interface Props {
	handleOpenMenu?: () => void;
}

export const Menu: FC<Props> = ({ handleOpenMenu }) => {
	const { menu } = useContext(DataContext)!;
	return (
		<ul className="nav">
			{menu.map((item) => {
				return (
					<li className="nav__item">
						<a className="nav__link" href={item.href} onClick={handleOpenMenu}>
							{item.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
};
