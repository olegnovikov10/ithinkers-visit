import { FC } from "react";

interface Props {
	name: string;
	content: string;
}

export const AchievementsItem: FC<Props> = ({ name, content }) => {
	return (
		<div className="achievements-item">
			<div className="achievements-item__name">{name}</div>
			<div className="achievements-item__content">{content}</div>
		</div>
	);
};
