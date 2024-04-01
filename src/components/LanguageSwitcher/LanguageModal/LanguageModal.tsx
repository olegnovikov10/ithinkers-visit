import { FC, useState, useTransition } from "react";
import Select from "react-select";

import "./languageModal.scss";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface Props {
	menuOpenUp?: boolean;
}

export const LanguageModal: FC<Props> = ({ menuOpenUp }) => {
	const { t } = useTranslation();
	return (
		<div className="language-modal">
			<div className="language-modal__text">{t("languages.title")}</div>
			<div className="wrapprer-languages">
				<LanguageSwitcher isFullLabel menuOpenUp />
				{/* <Select
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
					isSearchable={false}
					className="wrapprer-languages-select "
					classNamePrefix="wrapprer-languages"
					theme={(theme) => ({
						...theme,
						borderRadius: 0,

						colors: {
							...theme.colors,
							primary25: "#cbbdbd",
							primary: "black",
						},
					})}
				/> */}
			</div>
		</div>
	);
};
