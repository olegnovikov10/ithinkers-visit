import { FC, useContext } from "react";
import { ProductStepsItem } from "./ProductStepsItem";

import "./productSteps.scss";
import { DataContext } from "../../context/ContextData";

export const ProductSteps: FC = () => {
	const { developSteps } = useContext(DataContext)!;
	return (
		<section className="s-product-steps">
			<div className="s-product-steps__title">{developSteps.title}</div>
			<div className="steps">
				{developSteps.questions.map((item, i) => {
					const { title, count, description } = item;

					return (
						<ProductStepsItem
							key={`${item.title}${i}`}
							count={count}
							title={title}
							subTitle={description}
						/>
					);
				})}

				<ProductStepsItem isFooter title={developSteps.startAppTitle} />
			</div>
		</section>
	);
};
