'use client'

import styles from './workspace.module.css';
import BarIniatial from '../../components/BarIniatial';
import VideoList from '../../components/VideoList';
import SearchableVideoList from '../../components/SearchableVideoList';
import { Outlet } from 'react-router-dom';

export default function Search() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.videos}>
                    <h1>Buscar clipes</h1>
                    <SearchableVideoList />
                </div>

            </div>
        </>
    )

}