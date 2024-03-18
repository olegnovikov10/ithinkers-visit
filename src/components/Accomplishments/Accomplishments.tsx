import { FC } from "react";

import "./accomplishments.scss";

interface Props {}

export const Accomplishments: FC<Props> = () => {
	return (
		<section className="s-accomplishments">
			<h2 className="h2 s-accomplishments__title">Переваги</h2>
			<div className="accomplishments">
				<div className="accomplishments__item-wrap ">
					<div className="accomplishments__title">У нас</div>
					<div className="accomplishments__content accomplishments__content--with-bg ">
						<div className="accomplishments__item">
							<h4 className="accomplishments__header">
								Ціна розробки: від 50 $
							</h4>
							<p className="accomplishments__description">
								Оренда сайту на місяць
							</p>
						</div>

						<div className="accomplishments__item">
							<h4 className="accomplishments__header">
								Час розробки: від 3 до 5 днів
							</h4>
							<p className="accomplishments__description">
								Налаштування дизайну, додавання товарів, публікація у магазинах
							</p>
						</div>

						<div className="accomplishments__item">
							<h4 className="accomplishments__header">Мінімальні ризики</h4>
							<p className="accomplishments__description">
								Ви зможете протестувати додаток. Ви платите одразу за готовий
								продукть
							</p>
						</div>
					</div>
				</div>
				<div className="accomplishments__item-wrap ">
					<div className="accomplishments__title accomplishments__title--grey">
						В інших
					</div>
					<div className="accomplishments__content accomplishments__content ">
						<div className="accomplishments__item accomplishments__item--no-bg">
							<h4 className="accomplishments__header">
								Ціна розробки: від 50 $
							</h4>
							<p className="accomplishments__description">
								Оренда сайту на місяць
							</p>
						</div>

						<div className="accomplishments__item accomplishments__item--no-bg ">
							<h4 className="accomplishments__header">
								Час розробки: від 3 до 5 днів
							</h4>
							<p className="accomplishments__description">
								Налаштування дизайну, додавання товарів, публікація у магазинах
							</p>
						</div>

						<div className="accomplishments__item accomplishments__item--no-bg">
							<h4 className="accomplishments__header">Мінімальні ризики</h4>
							<p className="accomplishments__description">
								Ви зможете протестувати додаток. Ви платите одразу за готовий
								продукть
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
