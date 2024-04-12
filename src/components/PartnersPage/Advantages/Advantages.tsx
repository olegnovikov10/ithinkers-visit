import { FC } from "react";
import "./advantages.scss";
import { AdvantagesPartners } from "../../../context/ContextData";

interface Props {
	data: AdvantagesPartners;
}

export const Advantages: FC<Props> = ({ data }) => {
	return (
		<div className="s-partners-adv">
			<h2 className="s-partners-adv__title">{data.title}</h2>
			<div className="partners-adv">
				{data.data.map((item, i) => {
					return (
						<div key={`${item}${i}`} className="partners-adv__item">
							<div className="partners-adv__header">{item.header}</div>
							<div className="partners-adv__title">{item.title}</div>
							<div className="partners-adv__description">
								{item.description}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
