'use client'

import styles from './workspace.module.css';
import BarIniatial from '../../components/BarIniatial';
import VideoList from '../../components/VideoList';
//teste
export default function workspace() {

    return (
        <>
            <div className={styles.main}>
                <BarIniatial />
                <VideoList />
            </div>
        </>
    )

}