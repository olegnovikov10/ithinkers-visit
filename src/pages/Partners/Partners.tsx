import { FC } from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/PartnersPage/Banner/Banner";
import { StartWork } from "../../components/PartnersPage/StartWork";
import { Program } from "../../components/PartnersPage/Program/Program";
import { Clients } from "../../components/PartnersPage/Clients";
import { WhyUs } from "../../components/PartnersPage/WhyUs/WhyUs";

export const Partners: FC = () => {
	return (
		<>
			<Header />
			<div className="header-wrapper">
				<Banner />
			</div>
			<div className="main-container">
				<StartWork />
				<Program />
				<Clients />
				<WhyUs />
			</div>
		</>
	);
};
