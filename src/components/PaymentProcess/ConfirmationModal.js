import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const ConfirmationModal = ({ modalIsOpen, closeModal }) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="confirm-box">
                    <span className='confirm-icon'> &#10003; </span>
                    <h3>Congratulation</h3>
                    <h5>Your Booking is Confirmed</h5>
                </div>
                <div className='text-right'>
                    <button onClick={closeModal} className='btn btn-success px-3'>Ok</button>
                </div>
            </Modal>
        </div>
    );
};

export default ConfirmationModal;