import { FC, useState } from "react";
import Select from "react-select";

import ua from "../../assets/images/ua.png";
import ru from "../../assets/images/russia.png";
import pl from "../../assets/images/poland.png";
import usa from "../../assets/images/usa.png";

import "./languages.scss";

interface LanguageOption {
	value: string;
	label: string;
	image: string;
}

const options: LanguageOption[] = [
	{ value: "ukraine", label: "УКР", image: ua },
	{ value: "england", label: "ENG", image: usa },
	{ value: "poland", label: "PL", image: pl },
	{ value: "russia", label: "РУС", image: ru },
];

interface ControlStyles {
	minWidth?: string;
}

export const LanguageSwitcher: FC = () => {
	const [selectedOption, setSelectedOption] = useState<LanguageOption | null>(
		options[0]
	);

	return (
		<div className="header-languages">
			<Select
				defaultValue={selectedOption}
				onChange={setSelectedOption}
				options={options}
				className="wrapprer-languages-select"
				classNamePrefix="wrapprer-languages"
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
