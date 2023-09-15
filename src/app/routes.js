import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/Notfound";
import PaginaDefault from "./layouts";
import SearchableVideoList from "./components/SearchableVideoList";
import Dashboard from "./pages/dashboard";
import Channels from "./pages/channels";
import Settings from "./pages/settings";
import Help from "./pages/help";

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaDefault/>}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/monitor/channels" element={<Channels/>} />
                    <Route path="/monitor/search" element={<SearchableVideoList/>} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/help" element={<Help/>} />
                    <Route path="*" element={<Dashboard/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;