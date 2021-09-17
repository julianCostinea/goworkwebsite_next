import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import ModalBox from './ModalBox';

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    transition: '1s'
                }}>
                <ModalBox modalClosed={props.modalClosed} />
            </div>
        </Aux>
    )
}

export default Modal;