import { FC } from "react";
import { Button } from "../Button";

import partners1 from "../../assets/images/partners/partners1.png";
import partners2 from "../../assets/images/partners/partners2.png";
import partners3 from "../../assets/images/partners/partners3.png";
import partners4 from "../../assets/images/partners/partners4.png";
import partners5 from "../../assets/images/partners/partners5.png";
import partners6 from "../../assets/images/partners/partners6.png";
import partners7 from "../../assets/images/partners/partners7.png";
import partners8 from "../../assets/images/partners/partners8.png";
import partners9 from "../../assets/images/partners/partners9.png";
import partners10 from "../../assets/images/partners/partners10.png";
import partners11 from "../../assets/images/partners/partners11.png";
import partners12 from "../../assets/images/partners/partners12.png";

import "./partners.scss";

interface Props {}

export const Partners: FC<Props> = () => {
	return (
		<section className="s-partners">
			<h2 className="h2 s-partners__title">Партнери</h2>
			<div className="s-partners__sub-title">
				Інтеграція дозволяє швидко та безшовно синхронізувати бонусні бали та
				мобільні замовлення з вашою POS-системою. Інтеграція з платіжною
				системою потрібна для прийому та процесингу онлайн-платежів за
				замовлення в застосунку
			</div>

			<div className="partners">
				<div className="partners__item">
					<div className="partners__title">POS інтеграції</div>
					<div className="partners__content">
						<img
							className="partners__img partners__img--payments"
							src={partners1}
							alt="img"
						/>
						<img
							className="partners__img partners__img--payments"
							src={partners2}
							alt="img"
						/>
						<img
							className="partners__img partners__img--payments"
							src={partners3}
							alt="img"
						/>
						<img
							className="partners__img partners__img--payments"
							src={partners4}
							alt="img"
						/>
						<img
							className="partners__img partners__img--payments"
							src={partners5}
							alt="img"
						/>
						<img
							className="partners__img partners__img--payments"
							src={partners6}
							alt="img"
						/>
					</div>
				</div>

				<div className="partners__item">
					<div className="partners__title">Платіжні системи</div>
					<div className="partners__content">
						<div className="partners__img-wrap">
							<img
								className="partners__img partners__img--payments"
								src={partners7}
								alt="img"
							/>
						</div>
						<div className="partners__img-wrap">
							<img
								className="partners__img partners__img--payments"
								src={partners8}
								alt="img"
							/>
						</div>
						<div className="partners__img-wrap">
							<img
								className="partners__img partners__img--payments"
								src={partners9}
								alt="img"
							/>
						</div>
						<div className="partners__img-wrap">
							<img
								className="partners__img partners__img--payments"
								src={partners10}
								alt="img"
							/>
						</div>
						<div className="partners__img-wrap">
							<img
								className="partners__img partners__img--payments"
								src={partners11}
								alt="img"
							/>
						</div>
						<div className="partners__img-wrap">
							<img
								className="partners__img partners__img--payments"
								src={partners12}
								alt="img"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="s-partners__footer">
				<div className="s-partners__footer-title">Стати партнером</div>
				<Button cName="button button--black s-partners__footer-btn">
					Залишити заявку
				</Button>
			</div>
		</section>
	);
};
