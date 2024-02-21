import React from 'react'
import './GithubUsers.css'
import SearchInput from '../../Components/Input/SearchInput'
import UsersList from '../../Components/UsersList'

const GithubUsers = () => {
    return (
        <>
            <div className='usersContainer'>
                <div className='searchUsers'><SearchInput /></div>
                <div className='usersList'><UsersList /></div>
            </div>
        </>

    )
}

export default GithubUsers