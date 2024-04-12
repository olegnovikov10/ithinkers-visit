import { FC } from "react";

import "./ourPossibilities.scss";
import { PossibilityPage } from "../../context/ContextData";

interface Props {
	possibilities?: PossibilityPage;
}

export const OurPossibilities: FC<Props> = ({ possibilities }) => {
	return (
		<section className="s-posibilities">
			<h2 className="h2 s-posibilities__title">{possibilities?.title}</h2>
			<div className="posibilities">
				{possibilities?.dataContent.map((item, i) => {
					return (
						<div key={`${item}${i}`} className="posibilities__item">
							<div className="posibilities__header">{item.percent}</div>
							<div className="posibilities__title">{item.title}</div>
							<p className="posibilities__text">{item.content}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
