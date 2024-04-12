import { FC } from "react";
import { Link, useParams } from "react-router-dom";

interface Props {
	title: string;
	subTitle: string;
	link: string;
	presentationUrl?: string;
	picture: string;
	icon?: string;
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
	const { lang } = useParams();

	let prefixedLink;

	prefixedLink = lang === undefined ? link : `/${lang}${link}`;

	return (
		<div className="business-solution-item" style={{ background: background }}>
			<div className="business-solution-item__left">
				<h3 className="h3 business-solution-item__title">{title}</h3>
				<div className="business-solution-item__sub-title">{subTitle}</div>
				<div className="business-solution-item__links">
					<Link
						to={prefixedLink}
						className="business-solution-item__link-detail"
					>
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
