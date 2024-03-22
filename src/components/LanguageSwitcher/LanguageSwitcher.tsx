import { FC, useContext, useState } from "react";
import Select from "react-select";

import ua from "../../assets/images/ua.png";
import ru from "../../assets/images/russia.png";
import pl from "../../assets/images/poland.png";
import usa from "../../assets/images/usa.png";

import "./languages.scss";
import { MyContext } from "../../Context";
import { useTranslation } from "react-i18next";

interface LanguageOption {
	value: string;
	label: string;
	image: string;
}

const options: LanguageOption[] = [
	{ value: "ua", label: "УКР", image: ua },
	{ value: "en", label: "ENG", image: usa },
	{ value: "pl", label: "PL", image: pl },
	{ value: "ru", label: "РУС", image: ru },
];

interface ControlStyles {
	minWidth?: string;
}

export const LanguageSwitcher: FC = () => {
	const { i18n } = useTranslation();

	const [selectedOption, setSelectedOption] = useState<LanguageOption | null>(
		options.find((option) => option.value === i18n.language) || null
	);

	const { changeLanguage } = useContext(MyContext)!;

	const handleLanguageChange = (selectedOption: LanguageOption | null) => {
		setSelectedOption(selectedOption); // Обновляем выбранный язык в состоянии компонента
		if (selectedOption) {
			changeLanguage(selectedOption.value); // Вызываем функцию изменения языка из контекста
		}
	};

	return (
		<div className="header-languages">
			<Select
				value={selectedOption}
				onChange={handleLanguageChange}
				className="wrapprer-languages-select"
				classNamePrefix="wrapprer-languages"
				options={options}
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
							alt={option.label}
							style={{ width: "20px", marginRight: "5px" }}
						/>
						{option.label}
					</div>
				)}
				getOptionValue={(option: LanguageOption) => option.value}
			/>
		</div>
	);
};
