import { FC } from "react";

import "./whyUs.scss";
import { WhyUs as ws } from "../../../context/ContextData";

interface Props {
	data: ws;
}

export const WhyUs: FC<Props> = ({ data }) => {
	return (
		<section className="s-why-us">
			<div className="s-why-us__title">{data.title}</div>
			<div className="s-why-us__description">{data.description}</div>

			<div className="why-us">
				{data.data.map((item, i) => {
					return (
						<div key={`${item}${i}`} className="why-us__item">
							<div className="why-us__header">
								<img src={item.img} alt="" />
							</div>
							<div className="why-us__title">{item.title}</div>
							{item.description && (
								<div className="why-us__description">{item.description}</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};
