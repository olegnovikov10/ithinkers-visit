import { FC } from "react";

import "./ourPossibilities.scss";

interface Props {}

export const OurPossibilities: FC<Props> = () => {
	return (
		<section className="s-posibilities">
			<h2 className="h2 s-posibilities__title">
				Можливості додатку для вашого закладу
			</h2>
			<div className="posibilities">
				<div className="posibilities__item">
					<div className="posibilities__header">📉 На 20%</div>
					<div className="posibilities__title">Скорочує витрати</div>
					<p className="posibilities__text">
						не потрібно використовувати неефектине PDF або друковане меню
					</p>
				</div>
				<div className="posibilities__item">
					<div className="posibilities__header">💸 На 15%</div>
					<div className="posibilities__title">Скорочує витрати</div>
					<p className="posibilities__text">
						не потрібно використовувати неефектине PDF або друковане меню
					</p>
				</div>
				<div className="posibilities__item">
					<div className="posibilities__header">😍 На 30%</div>
					<div className="posibilities__title">Збільшує середній чек</div>
					<p className="posibilities__text">
						фото, відео, детальні описи продають значно краще
					</p>
				</div>
			</div>
		</section>
	);
};
