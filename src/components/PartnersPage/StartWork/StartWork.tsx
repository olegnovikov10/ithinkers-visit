import { FC } from "react";
import { PartnersForm } from "../PartnersForm";

import "./startWork.scss";

interface Props {}

export const StartWork: FC<Props> = () => {
	return (
		<div className="start-work">
			<h2 className="h2 start-work__title">
				Готові розпочати співпрацю з E-app?
			</h2>
			<div className="start-work-form-wrap">
				<PartnersForm />
			</div>
		</div>
	);
};
