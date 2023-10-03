'use client'

import { useState } from 'react'
import styles from "./Sidebar.module.css";
import { FaQuestion } from 'react-icons/fa';
import { FaGaugeHigh, FaEye, FaGear } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    return (
    <div className={styles.main}>
        <div className={styles.sidebar}>

            <div className={styles.logo_container}>
                <NavLink to="/">
                    <img className={styles.logo} src="https://cdn.discordapp.com/attachments/1143986307253682328/1144089006171246632/LogoBRANCO.png"/>
                    <img className={styles.logo_mobile} src="https://cdn.discordapp.com/attachments/1143986307253682328/1154130802733490236/LogoIcon.png"/>
                </NavLink>
            </div>

            <div className={styles.menu}>
                <ul className={styles.nav_links}>
                    <NavLink  to="/" className={styles.link}> <FaGaugeHigh className={styles.icons} /> <h2>Dashboard</h2></NavLink>
                    <NavLink  to="/monitor/channels" className={styles.link}> <FaEye className={styles.icons} /> <h2>Monitoramento</h2></NavLink>
                    <NavLink  to="/monitor/channels" className={styles.link}> <h4>Canais monitorados</h4></NavLink>
                    <NavLink  to="/monitor/search" className={styles.link}> <h4>Buscar clipes</h4></NavLink>
                <div>
                    <div className = {styles.status}>Em breve</div>
                    <h2 className = {styles.breve}>Automação</h2>
                </div>
                </ul>

                <div className={styles.footer}>
                    <ul className={styles.nav_links}>
                        <NavLink  to="/settings" className ={styles.link}> <FaGear className={styles.icons} /> <h2>Configuração</h2></NavLink>
                        <NavLink  to="/help" className ={styles.link}> <FaQuestion className={styles.icons} /> <h2>Ajuda</h2></NavLink>
                    </ul>

                    <div className={styles.border}></div>
                    <div className={styles.menu_user}>
                        <div className={styles.image_user}>
                            <img src="https://i.pinimg.com/736x/2e/1d/e8/2e1de8448f840986232cc641e1809484.jpg" alt="user"/>
                        </div>
                        <div className={styles.user_name}>
                            <p>Nome de Usuário</p>
                        </div>
                        <BiLogOut className={styles.icons} />    
                    </div>
                </div>
            </div> 
        </div>
    </div>
  );
};







