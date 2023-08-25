'use client'

import styles from './workspace.module.css';
import BarIniatial from '../../components/BarIniatial';
import VideoList from '../../components/VideoList';
import SearchableVideoList from '../../components/SearchableVideoList';
export default function workspace() {

    return (
        <>
            <div className={styles.main}>
                <BarIniatial />
                <div>
                    <SearchableVideoList />
                </div>

            </div>
        </>
    )

}