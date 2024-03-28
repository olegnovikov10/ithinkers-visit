import { FC } from "react";
import { PartnersForm } from "../PartnersForm";

import "./banner.scss";

interface Props {}

export const Banner: FC<Props> = () => {
	return (
		<div className="partners-banner">
			<h1 className="partners-banner__title">Партнерська програма E-app</h1>
			<div className="partners-banner__description">
				Рекомендуйте наш сервіс та почніть заробляти 10% з абонплати приведеного
				клієнта
			</div>
			<PartnersForm />
		</div>
	);
};
