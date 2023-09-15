'use client'

import { useState } from 'react'
import styles from "./Navbar.module.css";
import { FaUserCircle,FaEquals,FaEllipsisV } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
export default function Sidebar() {

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={styles.main}>
      {/* <button className={styles.toggle_button} onClick={toggleSidebar}>
        {showSidebar ?    <FaEquals size={16}  />: <FaEllipsisV size={16}  />}
      </button>  */}
      {showSidebar && (
        <div className={styles.sidebar}>
          <NavLink to="/"><img src='https://media.discordapp.net/attachments/1143986307253682328/1144089006171246632/LogoBRANCO.png?width=1025&height=284'/></NavLink>
          <div className={styles.Menu}>
            <ul className={styles.sidebar_list}>
              <NavLink  to="/" className = {styles.link}> <FaAngleRight className={styles.arrowIcon} /> <h2>Dashboard</h2></NavLink>
              <NavLink  className = {styles.link}> <FaAngleRight className={styles.arrowIcon} /> <h2>Monitoramento</h2></NavLink>
              <NavLink  to="/workspace" className = {styles.link}> <h4>Buscar clipes</h4></NavLink>
              <NavLink  to="/workspace" className = {styles.link}> <h4>Canais monitorados</h4></NavLink>
              <div>
                <div className = {styles.status}>Em breve</div>
                <h2 className = {styles.breve}>Automação</h2>
              </div>
            </ul>
          </div>

          <div className={styles.MenuFooter}>
            <ul className={styles.sidebar_list}>
              <NavLink  to="/workspace" className ={styles.link}> <FaAngleRight className={styles.arrowIcon} /> <h2>Configuração</h2></NavLink>
              <NavLink  to="/workspace" className ={styles.link}> <FaAngleRight className={styles.arrowIcon} /> <h2>Ajuda</h2></NavLink>
            </ul>

            <div className={styles.border}></div>
              <div className={styles.MenuUser}>
              <FaUserCircle size={32}/>
              <p>Nome do Usuario</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};







