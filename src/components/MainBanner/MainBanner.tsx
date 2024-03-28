import { FC } from "react";
import { Button } from "../Button";
import "./mainBanner.scss";
import imageBanner from "../../assets/images/banner-mobile.png";
import { useTranslation } from "react-i18next";

interface Props {
	title?: string;
	description?: string;
}

export const MainBanner: FC<Props> = ({ title, description }) => {
	const { t } = useTranslation();

	const buttonText = t("buttonOpenModal");
	return (
		<div className="main-banner">
			<div className="main-banner__left">
				<div className="">
					<h1 className="main-banner__title">{title}</h1>
					<div className="main-banner__sub-title">{description}</div>
				</div>
				<Button cName="button button--white">{buttonText}</Button>
			</div>
			<div className="main-banner__right">
				<img src={imageBanner} alt="banner" className="main-banner__img" />
			</div>
		</div>
	);
};
