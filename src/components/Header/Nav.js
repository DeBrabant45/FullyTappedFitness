import React, { Children } from 'react';
import NavLink from './NavLink'
import styles from './nav.module.css'


class Navbar extends React.Component {
    constructor() {
      super() 
      this.state = { showMenu: false }
    }
  
    _showMenu = (bool) => {
      this.setState({
        showMenu: bool
      });
    }

    render() {
        const showMenu = this.state.showMenu;
        let navigation;
        if (showMenu) {
            navigation = <NavLink show={{ display: "flex" }}>
                            <div onClick={this._showMenu.bind(null, false) } className={styles.HamburgerClose} >&times;</div>
                         </NavLink>
        } else {
          navigation = <NavLink />
        }
      return (
        <div>
          <div onClick={this._showMenu.bind(null, true)} className={styles.HamburgerButton}>&equiv;</div>
          {navigation}
        </div>
      )
    }
  }

export default Navbar;