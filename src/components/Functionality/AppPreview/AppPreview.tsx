import { FC, useState } from "react";
import cn from "classnames";
import { AppPreviewItem } from "./AppPreviewItem";

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
					<img
						key={src}
						src={src}
						alt=""
						className="app-preview__content-img"
					/>
				))}
			</div>
		</div>
	);
};
