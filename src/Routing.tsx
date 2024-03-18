import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
	useNavigate,
} from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Site } from "./pages/Site";
import { App as AppPage } from "./pages/App";
import { CoffeeShop } from "./pages/Coffeeshop";
import { NotFound } from "./pages/NotFound";
import { MyContextProvider } from "./Context";

export const Routing = () => {
	return (
		<Router>
			<MyContextProvider>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="home" element={<Navigate to="/" replace />} />
						<Route path="app" element={<AppPage />} />
						<Route path="site" element={<Site />} />
						<Route path="coffeeshop" element={<CoffeeShop />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</MyContextProvider>
		</Router>
	);
};
