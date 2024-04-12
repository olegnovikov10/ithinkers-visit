import { FC, useContext } from "react";
import { DataContext } from "../../../context/ContextData";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
	handleOpenMenu?: () => void;
}

export const Menu: FC<Props> = ({ handleOpenMenu }) => {
	const { menu } = useContext(DataContext)!;
	const { i18n } = useTranslation(); // Получаем текущий язык

	const location = useLocation();
	const navigate = useNavigate();

	const handleCheckRedirect = (href: string) => {
		const langPath = `/${i18n.language}`; // Получаем языковую часть URL
		if (langPath === "/uk") {
			navigate(`${href}`);
			return;
		}
		const destination = href.startsWith(langPath) ? href : `${langPath}${href}`;
		navigate(destination); // Переходим на страницу с учетом языкаы
	};

	return (
		<ul className="nav">
			{menu.map((item, i) => {
				if (item.type === "link-router") {
					return (
						<li key={`${item}${i}`} className="nav__item">
							<a
								className="nav__link"
								onClick={() => handleCheckRedirect(item.href)}
							>
								{item.title}
							</a>
						</li>
					);
				}
				return (
					<li key={`${item}${i}`} className="nav__item">
						<a className="nav__link" href={item.href} onClick={handleOpenMenu}>
							{item.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
};
