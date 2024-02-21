import React, { useState } from 'react';
import ModalComponent from './Modal';


const List = ({ data }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {data.length !== 0 ? (
                <div className='list'>
                    <ul>
                        <li>
                            <img src={data.avatar_url} alt='avatar' />
                        </li>
                        <li onClick={showModal}>{data.login}</li>
                        <li>
                            <a href={data.html_url}>{data.html_url}</a>
                        </li>
                    </ul>
                </div>
            ) : (
                <div>no data</div>
            )}
            <ModalComponent
                user={data}
                visible={isModalVisible}
                onClose={handleCancel}
            />
        </>
    );
};

export default List;
