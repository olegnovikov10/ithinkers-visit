import { FC } from "react";
import { LanguageModal } from "../../LanguageSwitcher/LanguageModal/LanguageModal";
import { Logo } from "../../Logo";
import cn from "classnames";
import menuClose from "../../../assets/images/mobile-close.webp";

import "./mobileMenu.scss";
import { Menu } from "../Menu";

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
				<Menu handleOpenMenu={handleOpenMenu} />
			</div>
			<div className="language-mobile-wrap">
				<LanguageModal menuOpenUp={true} />
			</div>
		</div>
	);
};
