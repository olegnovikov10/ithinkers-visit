import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";

import "./i18n"; // Путь к вашему файлу конфигурации i18n

import { Routing as Route } from "./Routing";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(<Route />);
