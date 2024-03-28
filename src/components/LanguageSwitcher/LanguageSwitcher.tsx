import { FC, useContext, useEffect, useState } from "react";
import Select from "react-select";

import "./languages.scss";
import { MyContext } from "../../context/Context";
import { DataContext } from "../../context/ContextData";
import { useTranslation } from "react-i18next";
import { LanguageOption } from "../../types";

interface Props {
	isFullLabel?: boolean;
}

export const LanguageSwitcher: FC<Props> = ({ isFullLabel }) => {
	const { changeLanguage } = useContext(MyContext)!;
	const { optionsLng } = useContext(DataContext)!;

	const { i18n } = useTranslation();

	const [selectedOption, setSelectedOption] = useState<LanguageOption | null>(
		optionsLng.find((option) => option.value === i18n.language) || null
	);

	const handleLanguageChange = (selectedOption: LanguageOption | null) => {
		setSelectedOption(selectedOption); // Обновляем выбранный язык в состоянии компонента
		if (selectedOption) {
			changeLanguage(selectedOption.value); // Вызываем функцию изменения языка из контекста
		}
	};

	useEffect(() => {
		const result =
			optionsLng.find((option) => option.value === i18n.language) || null;
		setSelectedOption(result);
	}, [i18n.language]);

	return (
		<Select
			value={selectedOption}
			onChange={handleLanguageChange}
			className="wrapprer-languages-select"
			classNamePrefix="wrapprer-languages"
			options={optionsLng}
			menuPlacement="auto"
			isSearchable={false}
			theme={(theme) => ({
				...theme,
				borderRadius: 0,
				colors: {
					...theme.colors,
					primary25: "#cbbdbd",
					primary: "#55D4FF",
				},
			})}
			getOptionLabel={(option: LanguageOption): any => (
				<div style={{ display: "flex" }}>
					<img
						className="select-img"
						src={option.image}
						alt={option.labelShort}
						style={{ width: "20px", marginRight: "5px" }}
					/>
					{isFullLabel ? option.labelFull : option.labelShort}
				</div>
			)}
			getOptionValue={(option: LanguageOption) => option.value}
		/>
	);
};
