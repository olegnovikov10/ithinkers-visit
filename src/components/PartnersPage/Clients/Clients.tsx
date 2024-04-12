import { FC } from "react";

import "./clients.scss";
import { PotentialClients } from "../../../context/ContextData";

interface Props {
	data: PotentialClients;
}

export const Clients: FC<Props> = ({ data }) => {
	return (
		<section className="s-potential-clients">
			<div className="s-potential-clients__title">{data.title}</div>

			<div className="potential-clients">
				{data.data.map((item, i) => {
					return (
						<div key={`${item}${i}`} className="potential-clients__item">
							<div className="potential-clients__header">
								<img src={item.img} alt="" />
							</div>
							<div className="potential-clients__title">{item.title}</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
