import { FC } from "react";
import { BusinessSolutionItem } from "./BusinnesSolutionItem";
import "./businessSolution.scss";
import businessImg from "../../assets/images/businness1.png";
import businessImg2 from "../../assets/images/businness2.png";
import businessImg3 from "../../assets/images/businness3.png";

interface Props {
	title: string;
	isSite: boolean;
	isCoffeeShop: boolean;
	isApp: boolean;
}

export const BusinessSolution: FC<Props> = ({
	title,
	isSite,
	isCoffeeShop,
	isApp,
}) => {
	return (
		<section className="s-business" id="solution">
			<h2 className="businnes-title">{title}</h2>
			<div className="business-item-wrapper">
				{isApp && (
					<BusinessSolutionItem
						presentationUrl="https://drive.google.com/file/d/1KsuyObiszlATOx_4fFfNbkCgXr84HZPg/view"
						title="Мобільний додаток для ресторану"
						subTitle="Не потрібно чекати кілька місяців,
           щоб розробити додаток. Ми допоможемо запустити додаток за 5 днів"
						picture={businessImg}
						link="/app"
						background="#F6F6F6"
					/>
				)}
				{isSite && (
					<BusinessSolutionItem
						presentationUrl="https://drive.google.com/file/d/1KsuyObiszlATOx_4fFfNbkCgXr84HZPg/view"
						title="Сайт для ресторану чи кафе"
						subTitle="Тепер не треба співпрацювати з багатьма підрядниками, 
          адже в E-app є все, що потрібне ресторану у сфері IT"
						picture={businessImg2}
						link="/site"
						background="#F3F9FF"
					/>
				)}
				{isCoffeeShop && (
					<BusinessSolutionItem
						presentationUrl="https://drive.google.com/file/d/1KsuyObiszlATOx_4fFfNbkCgXr84HZPg/view"
						title="Мобільний додаток для кав’ярні"
						subTitle="Не потрібно чекати кілька місяців,
           щоб розробити додаток. Ми допоможемо запустити додаток за 5 днів"
						picture={businessImg3}
						link="/coffeeshop"
						background="#F3F9FF"
					/>
				)}
			</div>
		</section>
	);
};
