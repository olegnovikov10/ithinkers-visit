import { FC, useContext } from "react";
import { BusinessSolution } from "../../components/BussinessSolution";
import { Header } from "../../components/Header";
import { MainBanner } from "../../components/MainBanner";
import { PriceTabs } from "../../components/PriceTabs";
import { RestaurantSlider } from "../../components/Restaurant-slider";
import { OurPossibilities } from "../../components/OurPossibilities";
import { OurPossibilitiesPictures } from "../../components/OurPossibilitiesPictures/OurPossibilitiesPictures";
import { Accomplishments } from "../../components/Accomplishments";
import { AppPreview } from "../../components/Functionality/AppPreview";
import { Functionality } from "../../components/Functionality/Functionality";
import { DataContext } from "../../context/ContextData";
import { Helmet } from "react-helmet";

interface Props {}

export const Site: FC<Props> = () => {
	const {
		banner,
		possibilities: { sitePage },
		functionality,
		advantages,
	} = useContext(DataContext)!;
	return (
		<>
			<Helmet>
				<link rel="alternate" hrefLang="uk" href="https://e-app.com.ua/site" />
				<link
					rel="alternate"
					hrefLang="ru"
					href="https://e-app.com.ua/ru/site"
				/>
				<link
					rel="alternate"
					hrefLang="en-GB"
					href="https://e-app.com.ua/en/site"
				/>
				<link
					rel="alternate"
					hrefLang="pl"
					href="https://e-app.com.ua/pl/site"
				/>
			</Helmet>
			<Header />
			<div className="header-wrapper">
				<MainBanner
					title={banner.sitePage.title}
					description={banner.sitePage.description}
				/>
				<RestaurantSlider />
			</div>
			<div className="main-container">
				<OurPossibilities possibilities={sitePage} />
				<OurPossibilitiesPictures possibilities={sitePage} />
				<Functionality
					title={functionality.title}
					slides={functionality.slides.appPage}
				/>
				<AppPreview tabs={functionality.tabs.appPage.data} />
				<BusinessSolution isCoffeeShop isSite={false} isApp />
				<Accomplishments
					title={advantages.title}
					advantages={advantages.appPage}
				/>
				<PriceTabs typeName="site" />
			</div>
		</>
	);
};
