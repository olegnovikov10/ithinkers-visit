import { FC, useState } from "react";
import cn from "classnames";
import { AppPreviewItem } from "./AppPreviewItem";

interface Props {}

const AppItems = [
	{
		id: "0",
		images: [],
		icon: "icon",
		name: "Cуші",
		title: "Sushi master",
		apps: "IOS android",
	},
	{
		id: "1",
		images: [],
		icon: "icon",
		name: "Бургерна",
		title: "Master burger",
		apps: "IOS android",
	},
	{
		id: "2",
		images: [],
		icon: "icon",
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

	return (
		<div className="app-preview">
			<ul className="app-previews__header">
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
								img="img"
								icon="icon"
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
					<img src={src} alt="" />
				))}
			</div>
		</div>
	);
};
