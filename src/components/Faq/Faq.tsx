import React, { useContext } from "react";
import { FC, useState } from "react";
import cn from "classnames";

import "./faq.scss";
import { DataContext } from "../../context/ContextData";

interface Props {}

export const Faq: FC<Props> = () => {
	const { faq } = useContext(DataContext)!;
	const [ids, setIds] = useState<string[]>([]);

	const handleCheckId = (id: string) => {
		let copyIds: string[] = [...ids];

		if (copyIds.includes(id)) {
			copyIds = copyIds.filter((itemId) => itemId !== id);
			setIds(copyIds);
			return;
		}

		if (!copyIds.includes(id)) {
			copyIds.push(id);
			setIds(copyIds);
			return;
		}
	};

	return (
		<section className="s-faq">
			<h2 className="h2 s-faq__title">{faq.title}</h2>

			<ul className="faq">
				{faq.data.map((item) => {
					return (
						<li className="faq__item" key={item.id}>
							<div
								className={cn("faq__header", {
									active: ids.includes(item.id),
								})}
								onClick={() => handleCheckId(item.id)}
							>
								<div className="faq__title">{item.title}</div>
							</div>
							<div
								className={cn("faq__content", {
									"faq__content-active": ids.includes(item.id),
								})}
							>
								{item.content}
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
