import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
	title: string;
	subTitle: string;
	link: string;
	presentationUrl?: string;
	picture: string;
	icon?: any;
	background: string;
}

export const BusinessSolutionItem: FC<Props> = ({
	title,
	subTitle,
	link,
	presentationUrl,
	picture,
	background,
}) => {
	return (
		<div className="business-solution-item" style={{ background: background }}>
			<div className="business-solution-item__left">
				<h3 className="h3 business-solution-item__title">{title}</h3>
				<div className="business-solution-item__sub-title">{subTitle}</div>
				<div className="business-solution-item__links">
					<Link to={link} className="business-solution-item__link-detail">
						Детальніше
					</Link>
					<a
						href={presentationUrl}
						target="blank"
						className="business-solution-item__link-prezentation"
					>
						Отримати презентацію
					</a>
				</div>
			</div>
			<div className="business-solution-item__right">
				<img className="business-solution-item__img" src={picture} alt="imgs" />
			</div>
		</div>
	);
};
