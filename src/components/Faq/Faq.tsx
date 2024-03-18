import React from "react";
import { FC, useState } from "react";
import cn from "classnames";

import "./faq.scss";

const items = [
	{
		id: "1",
		title: "Первый раздел",
		content:
			"Содержимое первого раздела Содержимое первого разделаСодержимое первого разделаСодержимое первого разделаСодержимое первого разделаСодержимое первого разделаСодержимое первого раздела",
	},
	{
		id: "2",
		title: "Второй раздел",
		content:
			"Dreambit company was founded some  years ago and Lorem ipsum sit amet, consectetur adipiscing elit. Nunc in vulputate libero et velitvulputate libero et velit”.Dreambit company was founded some  years ago and Lorem ipsum sit amet, consectetur adipiscing elit. Nunc in vulputate libero et velitvulputate libero et velit”. Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: "3",
		title: "Третий раздел",
		content: "Содержимое третьего раздела",
	},
];

interface Props {}

export const Faq: FC<Props> = () => {
	const [data] = useState(items);
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
			<h2 className="h2 s-faq__title">Часті питання</h2>

			<ul className="faq">
				{data.map((item: any) => {
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
