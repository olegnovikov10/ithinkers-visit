import { FC, useContext } from "react";
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
import { AppPreview } from "../../components/Functionality/AppPreview";
import { Functionality } from "../../components/Functionality/Functionality";
import { DataContext } from "../../context/ContextData";

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
