import { FC } from "react";
import "./appPreview.scss";

interface Props {
	img: string;
	icon: string;
	name: string;
	title: string;
	apps: string;
}

export const AppPreviewItem: FC<Props> = ({ img, icon, name, title, apps }) => {
	return (
		<div className="app-preview-item">
			<div className="app-preview-item__left">
				<img src={img} alt="" />
			</div>
			<div className="app-preview-item__right">
				<div className="app-preview-item__name-wrap">
					<img src={icon} alt="" className="app-preview-item__icon" />
					<div className="app-preview-item__name">{name}</div>
				</div>
				<div className="app-preview-item__title">{title}</div>
				<div className="app-preview-item__apps">{apps}</div>
			</div>
		</div>
	);
};
