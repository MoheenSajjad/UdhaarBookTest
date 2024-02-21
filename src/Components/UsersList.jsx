import React from 'react';
import List from './List';
import { useStateContext } from '../Context/ContextProvider';

const UsersList = () => {
    const { user } = useStateContext();

    return (
        <div>
            <List data={user} />
        </div>
    );
};

export default UsersList;
