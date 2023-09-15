'use client'

import styles from "./dashboard.module.css"
import BannerHeader from '../../components/BannerHeader';
import DashboardTabs from '../../components/DashboardCards';

export default function Dashboard() {
    return (
        <div className={styles.main}>
            <BannerHeader />
            <DashboardTabs />
        </div>
    );
}