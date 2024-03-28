import { FC, useContext } from "react";
import { Button } from "../Button";

import partners1 from "../../assets/images/partners/partners1.png";
import partners2 from "../../assets/images/partners/partners2.png";
import partners3 from "../../assets/images/partners/partners3.png";
import partners4 from "../../assets/images/partners/partners4.png";
import partners5 from "../../assets/images/partners/partners5.png";
import partners6 from "../../assets/images/partners/partners6.png";
import partners7 from "../../assets/images/partners/partners7.png";
import partners8 from "../../assets/images/partners/partners8.png";
import partners9 from "../../assets/images/partners/partners9.png";
import partners10 from "../../assets/images/partners/partners10.png";
import partners11 from "../../assets/images/partners/partners11.png";
import partners12 from "../../assets/images/partners/partners12.png";

import "./partners.scss";
import { DataContext } from "../../context/ContextData";
import { useTranslation } from "react-i18next";

interface Props {}

export const Partners: FC<Props> = () => {
	const { partners } = useContext(DataContext)!;
	const { t } = useTranslation();

	return (
		<section className="s-partners">
			<h2 className="h2 s-partners__title">{partners.title}</h2>
			<div className="s-partners__sub-title">{partners.description}</div>

			<div className="partners">
				<div className="partners__item">
					<div className="partners__title">{partners.integrationTitle}</div>
					<div className="partners__content">
						{partners.imagesIntegraton.map((img) => {
							return (
								<img
									className="partners__img partners__img--payments"
									src={img}
									alt="img"
								/>
							);
						})}
					</div>
				</div>

				<div className="partners__item">
					<div className="partners__title">{partners.paymentsTitle}</div>
					<div className="partners__content">
						{partners.imagesPayments.map((img) => {
							return (
								<div className="partners__img-wrap">
									<img
										className="partners__img partners__img--payments"
										src={img}
										alt="img"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="s-partners__footer">
				<div className="s-partners__footer-title">
					{partners.joinToPartners}
				</div>
				<Button cName="button button--black s-partners__footer-btn">
					{t("buttonTextRequest")}
				</Button>
			</div>
		</section>
	);
};
