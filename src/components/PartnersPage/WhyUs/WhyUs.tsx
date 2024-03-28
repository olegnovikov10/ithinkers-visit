import { FC } from "react";

import "./whyUs.scss";

interface Props {}

export const WhyUs: FC<Props> = () => {
	return (
		<section className="s-why-us">
			<div className="s-why-us__title">Чому бізнес обирає E-app?</div>
			<div className="s-why-us__description">
				Вже більше 200 закладів в 12 країнах обирають нас
			</div>

			<div className="why-us">
				<div className="why-us__item">
					<div className="why-us__header">
						<img src="" alt="" />
					</div>
					<div className="why-us__title">Гарний рейтинг додатків</div>
					<div className="why-us__description"></div>
				</div>
			</div>
		</section>
	);
};
