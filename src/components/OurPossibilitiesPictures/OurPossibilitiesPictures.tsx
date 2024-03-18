import { FC } from "react";

import "./ourPossibilitesPictures.scss";

interface Props {}

export const OurPossibilitiesPictures: FC<Props> = () => {
	return (
		<section className="s-our-posibilities-pictures">
			<h2 className="h2 s-our-posibilities-pictures__title">
				Можливості додатку для вашого закладу
			</h2>
			<div className="our-posibilities-pictures">
				<div className="our-posibilities-pictures__item">
					<div className="our-posibilities-pictures__title">
						Система лояльності
					</div>
				</div>
				<div className="our-posibilities-pictures__item">
					<div className="our-posibilities-pictures__title">
						<p>Доставка</p>
						<p>Самовивіз замовлення</p>
					</div>
				</div>
				<div className="our-posibilities-pictures__item">
					<div className="our-posibilities-pictures__title">
						<p>Замовлення</p>
						<p>Бронюваня столиків</p>
					</div>
				</div>
			</div>
		</section>
	);
};
