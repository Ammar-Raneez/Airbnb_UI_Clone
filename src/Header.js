import React, { useState } from 'react'
import './Header.css'
// import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { auth, provider } from './firebase';

function Header() {
    const [user, setUser] = useState(null);

    const signIn = event => {
        auth.signInWithPopup(provider)
        .then(res => {
            setUser(res.user)
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="logo" />
            </Link>

            {/* <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div> */}

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                {!user ? (
                        <Button onClick={() => signIn()}>Login</Button>
                    ) : (
                        <Button onClick={() => signIn()}><Avatar alt={user?.displayName} src={user?.photoURL} /></Button>
                        )}            
            </div>
        </div>
    )
}

export default Header
