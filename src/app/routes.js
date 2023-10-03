import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/Notfound";
import PaginaDefault from "./layouts";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Channels from "./pages/Channels";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Login from "./pages/login";

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaDefault/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path="/monitor/channels" element={<Channels/>} />
                    <Route path="/monitor/search" element={<Search/>} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/help" element={<Help/>} />
                    <Route path="*" element={<Dashboard/>} />
                </Route>
                <Routes>
                <Route path="/login" element={<Login/>} />
                </Routes>
                
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;