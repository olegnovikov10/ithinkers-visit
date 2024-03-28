import { FC, useContext, useEffect, useState, useTransition } from "react";
import cn from "classnames";

import "./priceTabs.scss";
import { Button } from "../Button";
import { DataContext } from "../../context/ContextData";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
	typeName?: "phone" | "site" | "cafe";
}

export const PriceTabs: FC<Props> = () => {
	const { t } = useTranslation();

	const { price } = useContext(DataContext)!;

	const location = useLocation();

	const [selectedTabId, setSelectedTabId] = useState(price.data[0].id);

	let selectedTab =
		price.data.find((tab) => tab.id === selectedTabId) || price.data[0];

	const isHomePage = location.pathname === "/";

	let filterContentData =
		price.data.find((tab) => tab.id === location.pathname.slice(1)) ||
		price.data[0];

	return (
		<section className="s-price-tabs" id="price">
			<h2 className="s-price-tabs__title">{price.title}</h2>
			<div className="price-tabs">
				{isHomePage && (
					<ul className="price-tabs__header">
						{price.data.map((tab) => {
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
					{(!isHomePage ? filterContentData.content : selectedTab.content).map(
						(item: any) => (
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
						)
					)}
				</div>

				<p className="price-tabs__footer">{price.footer}</p>

				{!isHomePage && (
					<div className="order-app">
						<div className="order-app__title">{t("price.startApp")}</div>
						<Button cName="btn button--black order-app__btn">
							{t("buttonTextRequest")}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
};
