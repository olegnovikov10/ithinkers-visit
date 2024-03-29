import { FC, useContext } from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/PartnersPage/Banner/Banner";
import { StartWork } from "../../components/PartnersPage/StartWork";
import { Program } from "../../components/PartnersPage/Program/Program";
import { Clients } from "../../components/PartnersPage/Clients";
import { WhyUs } from "../../components/PartnersPage/WhyUs/WhyUs";
import { DataContext } from "../../context/ContextData";

export const Partners: FC = () => {
	const { partnersData } = useContext(DataContext)!;

	return (
		<>
			<Header />
			<div className="header-wrapper">
				<Banner data={partnersData.banner} />
			</div>
			<div className="main-container">
				<StartWork title={partnersData.joinUs.firstTitle} />
				<Program data={partnersData.program} />
				<Clients data={partnersData.potentialClients} />
				<StartWork title={partnersData.joinUs.secondTitle} />
				<WhyUs data={partnersData.whyUs} />
			</div>
		</>
	);
};
