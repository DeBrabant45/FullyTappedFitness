import React from 'react';
import styles from './Modal.module.css'
import Contact from '../ContactForm/Contact.js';

class Modal extends React.Component {
  state = { showModal: false };
   
  showModal = () => this.setState({ showModal: true });
  hideModal = () => this.setState({ showModal: false });

    render() {
        const showModal = this.state.showModal;
        let modal;
        if (showModal) {
            modal = <div className={styles.ModalDisplay}>
                        <div className={styles.ModalContent}>
                            <div onClick={this.hideModal} className={styles.ModalClose}>&times;</div>
                            { /* <div className={styles.ModalInfo}>
                                <p>Contact us to sign up!</p>
                                    <a href={this.props.whereto}>
                                        <h1>{this.props.email}</h1>
                                    </a>
                            </div>
        <h3 className={styles.ModalInfo}>{this.props.number}</h3> */}
                            <Contact color={{ background: 'inherit' }}/>
                        </div>
                    </div>
        } 
      return (
        <div>
          <div onClick={this.showModal} className={styles.ModalButton}>SIGN UP</div>
          {modal}
        </div>
      )
    }
  }

export default Modal;