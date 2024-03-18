import { FC, useEffect, useState } from "react";
import cn from "classnames";

import "./priceTabs.scss";
import { Button } from "../Button";

interface Props {
	typeName?: "phone" | "site" | "cafe";
}

interface ITab {
	id: string;
	title: string;
	content: {
		id: string;
		month: string;
		desciption: string;
		fullPeriod?: string;
	}[];
}

const tabs: Array<ITab> = [
	{
		id: "phone",
		title: "Мобільний додаток",
		content: [
			{
				id: "month",
				month: "1135$",
				desciption: "Місячна",
			},
			{
				id: "halfyear",
				month: "95$",
				fullPeriod: "570$",
				desciption: "на 6 місяців",
			},
			{
				id: "year",
				month: "90$",
				fullPeriod: "1080$",
				desciption: "На рік",
			},
			{
				id: "twoYear",
				month: "14$",
				fullPeriod: "1800$",
				desciption: "2 роки",
			},
		],
	},
	{
		id: "site",
		title: "Сайт",
		content: [
			{
				id: "month",
				month: "1135$",
				desciption: "Місячна",
			},
			{
				id: "halfyear",
				month: "95$",
				fullPeriod: "570$",
				desciption: "на 6 місяців",
			},
			{
				id: "year",
				month: "90$",
				fullPeriod: "1080$",
				desciption: "На рік",
			},
			{
				id: "twoYear",
				month: "75$",
				fullPeriod: "1800$",
				desciption: "2 роки",
			},
		],
	},
	{
		id: "cafe",
		title: "Додаток для кав’ярні",
		content: [
			{
				id: "month",
				month: "133$",
				desciption: "Місячна",
			},
			{
				id: "halfyear",
				month: "95$",
				fullPeriod: "570$",
				desciption: "на 6 місяців",
			},
			{
				id: "year",
				month: "90$",
				fullPeriod: "1080$",
				desciption: "На рік",
			},
			{
				id: "twoYear",
				month: "75$",
				fullPeriod: "1800$",
				desciption: "2 роки",
			},
		],
	},
];

export const PriceTabs: FC<Props> = ({ typeName }) => {
	const [isTabs, setIsTabs] = useState<boolean>(false);
	const [tabsData] = useState(tabs);
	const [selectedTabId, setSelectedTabId] = useState(tabsData[0].id);

	const [contentType, setContentType] = useState<any>([...tabs]);

	useEffect(() => {
		if (typeName) {
			setIsTabs(false);

			const result = tabsData.filter((tab) => {
				return tab.id === typeName;
			});

			setContentType(result);
		} else {
			setIsTabs(true);
		}
	}, []);

	let selectedTab =
		tabsData.find((tab) => tab.id === selectedTabId) || tabsData[0];

	return (
		<section className="s-price-tabs" id="price">
			<h2 className="s-price-tabs__title">Ціна</h2>
			<div className="price-tabs">
				{isTabs && (
					<ul className="price-tabs__header">
						{tabsData.map((tab: ITab) => {
							return (
								<li
									className={cn("price-tabs__name", {
										"is-active": selectedTab === tab,
									})}
									key={tab.id}
								>
									<button
										className={"price-tabs__button"}
										onClick={() => {
											selectedTab !== tab && setSelectedTabId(tab.id);
										}}
									>
										{tab.title}
									</button>
								</li>
							);
						})}
					</ul>
				)}

				<div className="price-tabs__content">
					{(!isTabs && contentType.length > 0
						? contentType[0].content
						: selectedTab.content
					).map((item: any) => (
						<div key={item.id} className="price-tabs__content-item">
							<div className="price-tabs__content-desciption">
								{item.desciption}
							</div>
							<div className="price-tabs__content-price">{item.month}</div>
							{item.fullPeriod && (
								<div className="price-tabs__content-price-all">
									{item.fullPeriod}
								</div>
							)}
						</div>
					))}
				</div>

				<p className="price-tabs__footer">*Ціна відображена за точку</p>

				{!isTabs && (
					<div className="order-app">
						<div className="order-app__title">Запустимо сайт?</div>
						<Button cName="btn button--black order-app__btn">
							Залишити заявку
						</Button>
					</div>
				)}
			</div>
		</section>
	);
};
