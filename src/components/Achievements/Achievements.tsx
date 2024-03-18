import { FC } from "react";
import { AchievementsItem } from "./AchievementsItem";

import "./ahievements.scss";

export const Achievements: FC = () => {
	return (
		<section className="s-achievements">
			<h2 className="h2 s-achievements__title">Наші досягнення</h2>
			<div className="achievements">
				<AchievementsItem name="Кількість установок" content="1 000 000+" />
				<AchievementsItem name="Середня оцінка" content="⭐ 4.84" />
				<AchievementsItem name="Позитивних відгуків" content="100 000+" />
				<AchievementsItem name="Сума покупок в $" content="> 100 000 000$" />
			</div>
		</section>
	);
};
