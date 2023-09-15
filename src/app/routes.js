import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/Notfound";
import PaginaDefault from "./layouts";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Channels from "./pages/Channels";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaDefault/>}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/monitor/channels" element={<Channels/>} />
                    <Route path="/monitor/search" element={<Search/>} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/help" element={<Help/>} />
                    <Route path="*" element={<Dashboard/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;