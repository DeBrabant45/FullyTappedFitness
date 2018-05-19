import React from "react";
import { NavLink } from 'react-router-dom'
import styles from "./ListLink.module.css";

const ListLink = (props) => {
    return (
        <li>
            <NavLink exact to={props.to} activeClassName={styles.activelink}>
                {props.children}
            </NavLink>
        </li>
    );
}


export default ListLink;