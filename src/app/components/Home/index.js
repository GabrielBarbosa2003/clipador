'use client'

import { useState } from 'react'
import styles from "./Home.module.css";
import { NavLink } from 'react-router-dom';

export default function Home() {

    return (
    <header>
        <nav>
            <div className="logo">Logo</div>
            <ul className="nav-links">
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#criar-conta">Criar Conta</a></li>
            </ul>
        </nav>
    </header>
  );
};







