import { FC } from "react";
import { Achievements } from "../../components/Achievements";
import { BusinessSolution } from "../../components/BussinessSolution";
import { Faq } from "../../components/Faq";
import { Header } from "../../components/Header";
import { MainBanner } from "../../components/MainBanner";
import { OurClients } from "../../components/OurClients";
import { Partners } from "../../components/Partners/Partners";
import { PriceTabs } from "../../components/PriceTabs";
import { ProductSteps } from "../../components/ProductSteps";
import { RestaurantSlider } from "../../components/Restaurant-slider";
import { ReviewsSlider } from "../../components/ReviewsSlider";
import { OurPossibilities } from "../../components/OurPossibilities";
import { OurPossibilitiesPictures } from "../../components/OurPossibilitiesPictures/OurPossibilitiesPictures";
import { Accomplishments } from "../../components/Accomplishments";
import { ModalSend } from "../../components/Modal/ModalSend";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";

interface Props {}

export const Site: FC<Props> = () => {
	return (
		<>
			<Header />
			<div className="header-wrapper">
				<MainBanner />
				<RestaurantSlider />
			</div>
			<div className="main-container">
				<OurPossibilities />
				<OurPossibilitiesPictures />
				<BusinessSolution
					title="Інші продукти"
					isCoffeeShop
					isSite={false}
					isApp
				/>
				<Accomplishments />
				<PriceTabs typeName="site" />
			</div>
		</>
	);
};
