import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/sleepy'>Sleepy</Link>
            <Link to='/guilty'>Guilty</Link>
            <Link to='/happy'>Happy</Link>
        </div>
    )
}

export default Nav;