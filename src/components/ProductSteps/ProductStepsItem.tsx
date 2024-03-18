import { FC } from "react";
import { Button } from "../Button";

interface Props {
	count?: string;
	title: string;
	subTitle?: string;
	isFooter?: boolean;
}

export const ProductStepsItem: FC<Props> = ({
	count,
	title,
	subTitle,
	isFooter,
}) => {
	return !isFooter ? (
		<div className="steps-item">
			<div className="steps-item__header">{count}</div>
			<div className="steps-item__title">{title}</div>
			<div className="steps-item__sub-title">{subTitle}</div>
		</div>
	) : (
		<div className="steps-item">
			<div className="steps-item__title steps-item__title--footer">{title}</div>
			<Button cName="button button--black">Залишити заявку</Button>
		</div>
	);
};
