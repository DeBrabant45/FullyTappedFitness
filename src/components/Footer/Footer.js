import React from "react";
import Awards from "./FooterAwards/Awards.js";
import Banner from "./FooterBanner/Banner.js";
import styles from "./footer.module.css";


class Footer extends React.Component {
    render() {
      return (
        <footer className= {styles.footer}>
          <div className={styles.footcontain}>
            <Awards>
              <img src="https://static.wixstatic.com/media/eed6b4_deddc1397aee4e4783889455be1f58b7~mv2.png/v1/fill/w_260,h_348,al_c,usm_0.66_1.00_0.01/eed6b4_deddc1397aee4e4783889455be1f58b7~mv2.png"/>
            </Awards>
            <Banner />
            <Awards>
              <img src="https://static.wixstatic.com/media/eed6b4_4cab329bfd7e4a01bc69c8d36f2c1477~mv2.png/v1/fill/w_270,h_348,al_c,usm_0.66_1.00_0.01/eed6b4_4cab329bfd7e4a01bc69c8d36f2c1477~mv2.png"/>
            </Awards>
          </div>
        </footer>
      );
    }
  }

export default Footer; 