import { FC } from "react";
import { PartnersForm } from "../PartnersForm";

import "./banner.scss";
import { PartnersBanner } from "../../../context/ContextData";

interface Props {
	data: PartnersBanner;
}

export const Banner: FC<Props> = ({ data }) => {
	return (
		<div className="partners-banner">
			<h1 className="partners-banner__title">{data.title}</h1>
			<div className="partners-banner__description">{data.description}</div>
			<PartnersForm />
		</div>
	);
};
