import { Outlet } from "react-router-dom"
import Sidebar from "../components/BarIniatial"
import styles from "./default.module.css"

 function PaginaDefault() {
    return (
        
        <div className={styles.layout}>
            <Sidebar/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    )
}
export default PaginaDefault;