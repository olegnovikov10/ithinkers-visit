import { FC, useState } from "react";
import { Logo } from "../Logo";
import { NavBar } from "./NavBar";
import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";

import menuImg from "../../assets/images/icon-menu.webp";

import "./header.scss";
import { MobileMenu } from "./MobileMenu";

export const Header: FC = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<header className="header">
			<MobileMenu isOpenMenu={openMenu} handleOpenMenu={handleOpenMenu} />
			<div className="header__left">
				<Logo />
			</div>
			<div className="header__right">
				<NavBar />
				<div className="header-languages">
					<LanguageSwitcher />
				</div>

				<Button cName="button button--black button--black-header">
					Залишити заявку
				</Button>
				<div className="burger-button" onClick={handleOpenMenu}>
					<img src={menuImg} alt="menu" />
				</div>
			</div>
		</header>
	);
};
