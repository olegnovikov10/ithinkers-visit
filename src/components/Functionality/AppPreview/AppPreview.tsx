import { FC, useState } from "react";
import cn from "classnames";
import { AppPreviewItem } from "./AppPreviewItem";

import sushi from "../../../assets/images/app-preview/sushi.png";
import burger from "../../../assets/images/app-preview/burger.png";
import hata from "../../../assets/images/app-preview/hata.png";
import iconSushi from "../../../assets/images/app-preview/icon-sush.png";
import iconBurger from "../../../assets/images/app-preview/icon-burger.png";
import iconUkr from "../../../assets/images/ua.png";

import content from "../../../assets/images/app-preview/content.png";
import content1 from "../../../assets/images/app-preview/content1.png";
import content2 from "../../../assets/images/app-preview/content2.png";
import content3 from "../../../assets/images/app-preview/content3.png";

import "./appPreview.scss";
import { TabFunc } from "../../../context/ContextData";

interface Props {
	tabs: TabFunc[];
}

export const AppPreview: FC<Props> = ({ tabs = [] }) => {
	const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

	let selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

	return (
		<div className="app-preview">
			<ul className="app-preview__header">
				{tabs.map((tab) => {
					return (
						<li
							className={cn("app-preview__item-wrap", {
								"is-active": selectedTab === tab,
							})}
							onClick={() => {
								selectedTab !== tab && setSelectedTabId(tab.id);
							}}
							key={tab.id}
						>
							<AppPreviewItem
								img={tab.img}
								icon={tab.icon}
								name={tab.name}
								title={tab.title}
								apps={`${tab.ios} ${tab.android}`}
							/>
						</li>
					);
				})}
			</ul>

			<div className="app-preview__content">
				{selectedTab.images.map((src) => (
					<img src={src} alt="" className="app-preview__content-img" />
				))}
			</div>
		</div>
	);
};
