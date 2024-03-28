import { FC } from "react";

import "./program.scss";

interface Props {}

export const Program: FC<Props> = () => {
	return (
		<section className="program">
			<div className="program__title">Як працює партнерська програма</div>

			<div className="program-steps">
				<div className="program-steps__item">
					<div className="program-steps__header">01</div>
					<div className="program-steps__title">Зареєструйтеся</div>
					<div className="program-steps__content">
						Залиште номер телефону, з вами зв'яжеться менеджер та розповість про
						всі умови співпраці
					</div>
				</div>

				<div className="program-steps__item">
					<div className="program-steps__header">02</div>
					<div className="program-steps__title">Зареєструйтеся</div>
					<div className="program-steps__content">
						Залиште номер телефону, з вами зв'яжеться менеджер та розповість про
						всі умови співпраці
					</div>
				</div>

				<div className="program-steps__item">
					<div className="program-steps__header">03</div>
					<div className="program-steps__title">Зареєструйтеся</div>
					<div className="program-steps__content">
						Залиште номер телефону, з вами зв'яжеться менеджер та розповість про
						всі умови співпраці
					</div>
				</div>

				<div className="program-steps__item">
					<div className="program-steps__header">04</div>
					<div className="program-steps__title">Зареєструйтеся</div>
					<div className="program-steps__content">
						Залиште номер телефону, з вами зв'яжеться менеджер та розповість про
						всі умови співпраці
					</div>
				</div>
			</div>
		</section>
	);
};
