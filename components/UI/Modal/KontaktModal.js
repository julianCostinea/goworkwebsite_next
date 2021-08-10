import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import KontaktForm from '../../../components/KontaktForm/KontaktForm';

class KontaktModal extends Component {
    shouldComponentUpdate ( nextProps ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className = {classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        transition: '1s'
                    }}>
                    <div className={classes.KontaktModal}>
                        <KontaktForm show={this.props.show}/>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default KontaktModal;