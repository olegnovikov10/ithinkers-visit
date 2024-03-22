import { FC } from "react";
import { Button } from "../Button";
import "./mainBanner.scss";
import imageBanner from "../../assets/images/banner-mobile.png";
import { useTranslation } from "react-i18next";

export const MainBanner: FC = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className="main-banner">
			<div className="main-banner__left">
				<div className="">
					<h1 className="main-banner__title">{t("main.header")}</h1>
					<div className="main-banner__sub-title">
						Збільшуй кількість замовлень та підвищуй середній чек, покращуй
						лояльність клієнтів. Розвивай свій бізнес за допомогою готового
						мобільного додатку та сайту
					</div>
				</div>
				<Button cName="button button--white">Залишити заявку</Button>
			</div>
			<div className="main-banner__right">
				<img src={imageBanner} alt="banner" className="main-banner__img" />
			</div>
		</div>
	);
};
