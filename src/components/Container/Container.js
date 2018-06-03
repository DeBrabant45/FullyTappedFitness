import React from "react";
import styles from "./Container.module.css";

export default ({ children }) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.contentinfo}>
                {children}
            </div>
        </div>
    </div>
  );