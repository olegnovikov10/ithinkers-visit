import { FC } from "react";
import { AdvantagesPage } from "../../context/ContextData";

import "./accomplishments.scss";

interface Props {
	title: string;
	advantages: AdvantagesPage;
}

export const Accomplishments: FC<Props> = ({ title, advantages }) => {
	return (
		<section className="s-accomplishments">
			<h2 className="h2 s-accomplishments__title">{title}</h2>
			<div className="accomplishments">
				<div className="accomplishments__item-wrap ">
					<div className="accomplishments__title">{advantages?.our.title}</div>
					<div className="accomplishments__content accomplishments__content--with-bg ">
						{advantages?.our.data.map((item, i) => {
							return (
								<div key={`${item}${i}`} className="accomplishments__item">
									<h4 className="accomplishments__header">{item.title}</h4>
									<p className="accomplishments__description">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className="accomplishments__item-wrap ">
					<div className="accomplishments__title accomplishments__title--grey">
						{advantages?.other.title}
					</div>

					<div className="accomplishments__content accomplishments__content ">
						{advantages?.other.data.map((item, i) => {
							return (
								<div
									key={`${item}${i}`}
									className="accomplishments__item accomplishments__item--no-bg"
								>
									<h4 className="accomplishments__header">{item.title}</h4>
									<p className="accomplishments__description">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
