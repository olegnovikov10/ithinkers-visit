import { FC } from "react";

import "./program.scss";
import { Program as Prg } from "../../../context/ContextData";

interface Props {
	data: Prg;
}

export const Program: FC<Props> = ({ data }) => {
	return (
		<section className="program">
			<div className="program__title">{data.title}</div>

			<div className="program-steps">
				{data.data.map((item) => {
					return (
						<div className="program-steps__item">
							<div className="program-steps__header">{item.count}</div>
							<div className="program-steps__title">{item.title}</div>
							<div className="program-steps__content">{item.description}</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
