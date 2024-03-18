import { FC } from "react";
import { ProductStepsItem } from "./ProductStepsItem";

import "./productSteps.scss";

export const ProductSteps: FC = () => {
	return (
		<section className="s-product-steps">
			<div className="s-product-steps__title">
				⚡️ Не потрібно чекати місяці, щоб розробити додаток чи сайт
			</div>
			<div className="steps">
				<ProductStepsItem
					count="01"
					title="Залишай заявку"
					subTitle="Залиш свої контактні дані,
і наші менеджери зв'яжуться з Вами для уточнення всіх питань"
				/>

				<ProductStepsItem
					count="02"
					title="Заповнюй анкету"
					subTitle="Дай відповідь на питання у нашій анкеті про свій бізнес для запуску сайту та програми"
				/>

				<ProductStepsItem
					count="03"
					title="Отримуй готовий додаток або сайт"
					subTitle="Ми допомагаємо все підготувати: інтегрувати POS-систему, підключити платежі, налаштувати умови доставки і дизайн. Публікуємо додаток та сайт."
				/>

				<ProductStepsItem
					isFooter
					title="Запустимо сайт
          та додаток разом?"
				/>
			</div>
		</section>
	);
};
