import { FC } from "react";
import { LanguageModal } from "../../LanguageSwitcher/LanguageModal/LanguageModal";
import { Logo } from "../../Logo";
import cn from "classnames";
import menuClose from "../../../assets/images/mobile-close.png";

import "./mobileMenu.scss";

interface Props {
	isOpenMenu: boolean;
	handleOpenMenu: () => void;
}

export const MobileMenu: FC<Props> = ({ isOpenMenu, handleOpenMenu }) => {
	return (
		<div className={cn("mobile-menu", { active: isOpenMenu })}>
			<div className="mobile-menu__header">
				<Logo />
				<div onClick={handleOpenMenu} className="close-mobile-menu">
					<img src={menuClose} alt="close" />
				</div>
			</div>
			<div className="wrapper-nav">
				<ul className="nav">
					<li className="nav__item">
						<a className="nav__link" href="#solution" onClick={handleOpenMenu}>
							Рішення
						</a>
					</li>
					<li className="nav__item">
						<a className="nav__link" href="#reviews" onClick={handleOpenMenu}>
							Відгуки
						</a>
					</li>
					<li className="nav__item">
						<a className="nav__link" href="#price" onClick={handleOpenMenu}>
							Ціна
						</a>
					</li>
					<li className="nav__item">
						<a className="nav__link" href="/#" onClick={handleOpenMenu}>
							Блог
						</a>
					</li>
					<li className="nav__item">
						<a className="nav__link" href="/#" onClick={handleOpenMenu}>
							Партнерська програма
						</a>
					</li>
				</ul>
			</div>
			<div className="language-mobile-wrap">
				<LanguageModal />
			</div>
		</div>
	);
};
