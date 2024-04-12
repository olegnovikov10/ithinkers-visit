import React, { useContext } from "react";

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
import { DataContext } from "../../context/ContextData";
import { Helmet } from "react-helmet";

export const Home = () => {
	const { banner, solution } = useContext(DataContext)!;
	return (
		<>
			<Helmet>
				<link rel="alternate" hrefLang="uk" href="https://e-app.com.ua/" />
				<link rel="alternate" hrefLang="ru" href="https://e-app.com.ua/ru" />
				<link rel="alternate" hrefLang="en-GB" href="https://e-app.com.ua/en" />
				<link rel="alternate" hrefLang="pl" href="https://e-app.com.ua/pl" />
			</Helmet>
			<Header />
			<div className="header-wrapper">
				<MainBanner
					title={banner.homePage.title}
					description={banner.homePage.description}
				/>
				<RestaurantSlider />
			</div>
			<div className="main-container">
				<BusinessSolution isSite={true} isCoffeeShop={true} isApp={true} />
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
