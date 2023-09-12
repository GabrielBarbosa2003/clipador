import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/Notfound";
import PaginaDefault from "./layouts";
import SearchableVideoList from "./components/SearchableVideoList";

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaDefault/>}>
                    <Route path="/" element={<SearchableVideoList/>} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;