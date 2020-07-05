import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className ={classes.Toolbar}>
        <div onClick ={props.clicked}>MENU</div>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <ul className = {classes.DesktopOnly}>
            <NavigationItems/>
        </ul>
    </header>

);

export default toolbar