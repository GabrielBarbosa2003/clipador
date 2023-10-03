import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import styles from "./default.module.css"
import Dashboard from "../pages/dashboard";

 function PaginaDefault() {
    return (
        
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    )
}
export default PaginaDefault;