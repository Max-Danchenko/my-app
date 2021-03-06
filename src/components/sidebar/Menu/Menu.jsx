import React from "react";
import Styles from "./Menu.module.css"
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <ul className={Styles.table}>
            <li className={Styles.list}><NavLink to={"/Home"} className={Styles.link}>Home</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Profile"} className={Styles.link}>Profile</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Messages"} className={Styles.link}>Messages</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Comments"} className={Styles.link}>Comments</NavLink></li>
            <li className={Styles.list}><NavLink to={"/UsersFollow"} className={Styles.link}>Users</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Photos"} className={Styles.link}>Photos</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Reviews"} className={Styles.link}>Reviews</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Videos"} className={Styles.link}>Videos</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Sign In"} className={Styles.link}>Sign In</NavLink></li>
        </ul>
    )
}


export default Menu;