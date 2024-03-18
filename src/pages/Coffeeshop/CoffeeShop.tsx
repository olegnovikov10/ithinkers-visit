import { FC } from "react";
import { Header } from "../../components/Header";
import { Accomplishments } from "../../components/Accomplishments";
import { BusinessSolution } from "../../components/BussinessSolution";
import { MainBanner } from "../../components/MainBanner";
import { ModalSend } from "../../components/Modal/ModalSend";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { OurPossibilities } from "../../components/OurPossibilities";
import { OurPossibilitiesPictures } from "../../components/OurPossibilitiesPictures/OurPossibilitiesPictures";
import { PriceTabs } from "../../components/PriceTabs";
import { RestaurantSlider } from "../../components/Restaurant-slider";

interface Props {}

export const CoffeeShop: FC<Props> = () => (
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
				isCoffeeShop={false}
				isSite
				isApp
			/>
			<Accomplishments />
			<PriceTabs typeName="site" />
		</div>
	</>
);
