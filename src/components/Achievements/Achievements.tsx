import { FC, useContext } from "react";
import { AchievementsItem } from "./AchievementsItem";

import "./ahievements.scss";
import { DataContext } from "../../context/ContextData";

export const Achievements: FC = () => {
	const { achievements } = useContext(DataContext)!;
	return (
		<section className="s-achievements">
			<h2 className="h2 s-achievements__title">{achievements.title}</h2>
			<div className="achievements">
				{achievements.items.map((item) => {
					return <AchievementsItem name={item.title} content={item.amount} />;
				})}
			</div>
		</section>
	);
};
