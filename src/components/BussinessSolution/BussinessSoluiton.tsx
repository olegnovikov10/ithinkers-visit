import { FC, useContext } from "react";
import { BusinessSolutionItem } from "./BusinnesSolutionItem";
import "./businessSolution.scss";
import businessImg from "../../assets/images/businness1.png";
import businessImg2 from "../../assets/images/businness2.png";
import businessImg3 from "../../assets/images/businness3.png";
import { DataContext } from "../../context/ContextData";
import { useLocation } from "react-router-dom";

interface Props {
	isSite: boolean;
	isCoffeeShop: boolean;
	isApp: boolean;
}

export const BusinessSolution: FC<Props> = ({
	isSite,
	isCoffeeShop,
	isApp,
}) => {
	const { solution } = useContext(DataContext)!;
	const location = useLocation();

	const title =
		location.pathname === "/"
			? solution.homePage.mainTitle
			: solution.otherPage.mainTitle;

	return (
		<section className="s-business" id="solution">
			<h2 className="businnes-title">{title}</h2>
			<div className="business-item-wrapper">
				{isApp && (
					<BusinessSolutionItem
						presentationUrl={solution.appBlock.presentationUrl}
						title={solution.appBlock.title}
						subTitle={solution.appBlock.description}
						picture={solution.appBlock.picture}
						link={solution.appBlock.link}
						background={solution.appBlock.background}
					/>
				)}
				{isSite && (
					<BusinessSolutionItem
						presentationUrl={solution.siteBlock.presentationUrl}
						title={solution.siteBlock.title}
						subTitle={solution.siteBlock.description}
						picture={solution.siteBlock.picture}
						link={solution.siteBlock.link}
						background={solution.siteBlock.background}
					/>
				)}
				{isCoffeeShop && (
					<BusinessSolutionItem
						presentationUrl={solution.appBlock.presentationUrl}
						title={solution.coffeeBlock.title}
						subTitle={solution.coffeeBlock.description}
						picture={solution.coffeeBlock.picture}
						link={solution.coffeeBlock.link}
						background={solution.coffeeBlock.background}
					/>
				)}
			</div>
		</section>
	);
};
