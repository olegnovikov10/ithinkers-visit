import { FC, useContext } from "react";
import { Button } from "../Button";

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
					<h3 className="partners__title">{partners.integrationTitle}</h3>
					<div className="partners__content">
						{partners.imagesIntegraton.map((img, i) => {
							return (
								<img
									key={`${img}${i}`}
									className="partners__img partners__img--payments"
									src={img}
									alt="img"
								/>
							);
						})}
					</div>
				</div>

				<div className="partners__item">
					<h3 className="partners__title">{partners.paymentsTitle}</h3>
					<div className="partners__content">
						{partners.imagesPayments.map((img, i) => {
							return (
								<div className="partners__img-wrap" key={`${img}${i}`}>
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
