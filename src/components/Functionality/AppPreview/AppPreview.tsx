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

interface Props {}

const AppItems = [
	{
		id: "0",
		img: sushi,
		images: [content, content1, content2, content3],
		icon: iconSushi,
		name: "Cуші",
		title: "Sushi master",
		apps: "IOS android",
	},
	{
		id: "1",
		img: burger,
		images: [content1, content2, content, content3],
		icon: iconBurger,
		name: "Бургерна",
		title: "Master burger",
		apps: "IOS android",
	},
	{
		id: "2",
		img: hata,
		images: [content, content1, content2, content3],
		icon: iconUkr,
		name: "Українська",
		title: "Хата піца",
		apps: "IOS android",
	},
];

export const AppPreview: FC<Props> = () => {
	const [isTabs, setIsTabs] = useState<boolean>(false);
	const [tabsData] = useState(AppItems);
	const [selectedTabId, setSelectedTabId] = useState(AppItems[0].id);

	let selectedTab =
		tabsData.find((tab) => tab.id === selectedTabId) || tabsData[0];

	{
		console.log(selectedTab);
	}

	return (
		<div className="app-preview">
			<ul className="app-preview__header">
				{tabsData.map((tab) => {
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
								apps={tab.apps}
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
