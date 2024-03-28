import { FC, useContext } from "react";
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
import { AppPreview } from "../../components/Functionality/AppPreview";
import { Functionality } from "../../components/Functionality/Functionality";
import { DataContext } from "../../context/ContextData";

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
