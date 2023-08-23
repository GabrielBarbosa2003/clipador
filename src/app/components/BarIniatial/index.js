'use client'

import { useState } from 'react'

import styles from "./Navbar.module.css";
export default function Sidebar() {

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className={styles.main}>
      <button className={styles.toggle_button} onClick={toggleSidebar}>
        {showSidebar ? 'Ocultar' : 'Exibir'}
      </button>
      {showSidebar && (
         
        <div className={`${styles.sidebar} ${showSidebar ? styles.show : styles.hide}`}>
          <ul className={styles.sidebar_list}>
            <li onClick={toggleDropdown}>
              Item 1
              {dropdownOpen && (
                <ul className={styles.dropdown}>
                  <li>Opção 1</li>
                  <li>Opção 2</li>
                  <li>Opção 3</li>
                </ul>
              )}
            </li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};







