import { FC } from "react";
import { PartnersForm } from "../PartnersForm";

import "./startWork.scss";

interface Props {
	title: string;
}

export const StartWork: FC<Props> = ({ title }) => {
	return (
		<div className="start-work">
			<h2 className="h2 start-work__title">{title}</h2>
			<div className="start-work-form-wrap">
				<PartnersForm />
			</div>
		</div>
	);
};
