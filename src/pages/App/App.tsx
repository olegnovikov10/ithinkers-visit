import { FC, useContext } from "react";
import { Header } from "../../components/Header";
import { Accomplishments } from "../../components/Accomplishments";
import { BusinessSolution } from "../../components/BussinessSolution";
import { MainBanner } from "../../components/MainBanner";
import { OurPossibilities } from "../../components/OurPossibilities";
import { OurPossibilitiesPictures } from "../../components/OurPossibilitiesPictures/OurPossibilitiesPictures";
import { PriceTabs } from "../../components/PriceTabs";
import { RestaurantSlider } from "../../components/Restaurant-slider";
import { AppPreview } from "../../components/Functionality/AppPreview";
import { Functionality } from "../../components/Functionality/Functionality";
import { DataContext } from "../../context/ContextData";
import { Helmet } from "react-helmet";

interface Props {}

export const App: FC<Props> = () => {
	const {
		banner,
		possibilities: { appPage },
		functionality,
		advantages,
	} = useContext(DataContext)!;

	return (
		<>
			<Helmet>
				<link rel="alternate" hrefLang="uk" href="https://e-app.com.ua/app" />
				<link
					rel="alternate"
					hrefLang="ru"
					href="https://e-app.com.ua/ru/app"
				/>
				<link
					rel="alternate"
					hrefLang="en-GB"
					href="https://e-app.com.ua/en/app"
				/>
				<link
					rel="alternate"
					hrefLang="pl"
					href="https://e-app.com.ua/pl/app"
				/>
			</Helmet>
			<Header />
			<div className="header-wrapper">
				<MainBanner
					title={banner.appPage.title}
					description={banner.appPage.description}
				/>
				<RestaurantSlider />
			</div>
			<div className="main-container">
				<OurPossibilities possibilities={appPage} />
				<OurPossibilitiesPictures possibilities={appPage} />
				<Functionality
					title={functionality.title}
					slides={functionality.slides.appPage}
				/>
				<AppPreview tabs={functionality.tabs.appPage.data} />
				<BusinessSolution isCoffeeShop isSite isApp={false} />
				<Accomplishments
					title={advantages.title}
					advantages={advantages.appPage}
				/>
				<PriceTabs typeName="site" />
			</div>
		</>
	);
};
