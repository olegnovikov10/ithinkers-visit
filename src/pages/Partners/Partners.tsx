import { FC, useContext } from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/PartnersPage/Banner/Banner";
import { StartWork } from "../../components/PartnersPage/StartWork";
import { Program } from "../../components/PartnersPage/Program/Program";
import { Clients } from "../../components/PartnersPage/Clients";
import { WhyUs } from "../../components/PartnersPage/WhyUs/WhyUs";
import { DataContext } from "../../context/ContextData";
import { Advantages } from "../../components/PartnersPage/Advantages";
import { Helmet } from "react-helmet";

export const Partners: FC = () => {
	const { partnersData } = useContext(DataContext)!;

	return (
		<>
			<Helmet>
				<link
					rel="alternate"
					hrefLang="uk"
					href="https://e-app.com.ua/referral-program"
				/>
				<link
					rel="alternate"
					hrefLang="ru"
					href="https://e-app.com.ua/ru/referral-program"
				/>
				<link
					rel="alternate"
					hrefLang="en-GB"
					href="https://e-app.com.ua/en/referral-program"
				/>
				<link
					rel="alternate"
					hrefLang="pl"
					href="https://e-app.com.ua/pl/referral-program"
				/>
			</Helmet>
			<Header />
			<div className="header-wrapper">
				<Banner data={partnersData.banner} />
			</div>
			<div className="main-container">
				<Advantages data={partnersData.advantages} />
				<StartWork title={partnersData.joinUs.firstTitle} />
				<Program data={partnersData.program} />
				<Clients data={partnersData.potentialClients} />
				<StartWork title={partnersData.joinUs.secondTitle} />
				<WhyUs data={partnersData.whyUs} />
			</div>
		</>
	);
};
