import React, { Children } from 'react';
import NavLink from './NavLink'
import styles from './nav.module.css'

class Navbar extends React.Component {
  state = { showMenu: false };
   
  showMenu = () => this.setState({ showMenu: true });
  hideMenu = () => this.setState({ showMenu: false });

    render() {
        const showMenu = this.state.showMenu;
        let navigation;
        if (showMenu) {
            navigation = <NavLink show={{ display: "flex" }}>
                            <div onClick={this.hideMenu} className={styles.HamburgerClose} >&times;</div>
                         </NavLink>
        } else {
          navigation = <NavLink />
        }
      return (
        <div>
          <div onClick={this.showMenu} className={styles.HamburgerButton}>&equiv;</div>
          {navigation}
        </div>
      )
    }
  }

export default Navbar;