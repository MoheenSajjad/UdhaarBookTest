import React, { useState } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce'; // Import the useDebounce hook
import { useStateContext } from '../../Context/ContextProvider';

const SearchInput = () => {
    const [username, setUsername] = useState('');
    const { setUser } = useStateContext();


    const [debouncedUsername] = useDebounce(username, 1000);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${debouncedUsername}`, {

            });
            console.log(response);
            setUser(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    React.useEffect(() => {
        if (debouncedUsername) {
            fetchData();
        }
    }, [debouncedUsername]);

    return (
        <div className='searchFields'>
            <label>Search Users</label>
            <input
                type='text'
                placeholder='Enter Github Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;
