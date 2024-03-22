import React from "react";

import { MainBanner } from "../../components/MainBanner/MainBanner";
import { RestaurantSlider } from "../../components/Restaurant-slider";
import { BusinessSolution } from "../../components/BussinessSolution";
import { ProductSteps } from "../../components/ProductSteps";
import { Achievements } from "../../components/Achievements";
import { ReviewsSlider } from "../../components/ReviewsSlider";
import { PriceTabs } from "../../components/PriceTabs";
import { OurClients } from "../../components/OurClients/OurClients";
import { Partners } from "../../components/Partners/Partners";
import { Faq } from "../../components/Faq";

import { Header } from "../../components/Header";
import { Functionality } from "../../components/Functionality/Functionality";
import { AppPreview } from "../../components/Functionality/AppPreview";

export const Home = () => {
	return (
		<>
			<Header />
			<div className="header-wrapper">
				<MainBanner />
			</div>
			<div className="main-container">
				<BusinessSolution
					title="Рішення для вашого бізнесу"
					isSite={true}
					isCoffeeShop={true}
					isApp={true}
				/>
				<ProductSteps />
				<Achievements />
				<ReviewsSlider />

				<PriceTabs />
				<OurClients />
				<Partners />
				<Faq />
			</div>
		</>
	);
};

export default Home;
