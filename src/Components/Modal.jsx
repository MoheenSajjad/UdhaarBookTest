import React from 'react';
import { Modal } from 'antd';

const ModalComponent = ({ user, visible, onClose }) => {
    return (
        <Modal
            title='User Details'
            visible={visible}
            onCancel={onClose}
            footer={null}
            className='modal'
        >
            <div>
                <img src={user.avatar_url} alt='avatar' />
                <p><b>UserName:</b> {user.login}</p>
                <p><b>Followers:</b> {user.followers}</p>
                <p><b>Following:</b> {user.following}</p>
                <p><b>Location:</b> {user.location}</p>
            </div>
        </Modal>
    );
};

export default ModalComponent;
