import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import WrapApp from "./App";
import { Home } from "./pages/Home";
import { Site } from "./pages/Site";
import { App as AppPage } from "./pages/App";
import { CoffeeShop } from "./pages/Coffeeshop";
import { NotFound } from "./pages/NotFound";
import { MyContextProvider } from "./context/Context";
import { DataContextProvider } from "./context/ContextData";
import "./i18n";
import { Partners } from "./pages/Partners";
import i18n from "./i18n";
import { useEffect } from "react";

export const Routing = () => {
	return (
		<Router>
			<MyContextProvider>
				<DataContextProvider>
					<Routes>
						<Route path="/" element={<WrapApp />}>
							<Route index element={<Home />} />
							<Route path="home" element={<Navigate to="/" replace />} />
							<Route path="app" element={<AppPage />} />
							<Route path="site" element={<Site />} />
							<Route path="coffeeshop" element={<CoffeeShop />} />
							<Route path="referral-program" element={<Partners />} />
							<Route path="*" element={<NotFound />} />
						</Route>

						<Route path="/:lang/*" element={<WrapApp />}>
							<Route index element={<Home />} />
							<Route path="app" element={<AppPage />} />
							<Route path="site" element={<Site />} />
							<Route path="coffeeshop" element={<CoffeeShop />} />
							<Route path="referral-program" element={<Partners />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</DataContextProvider>
			</MyContextProvider>
		</Router>
	);
};
