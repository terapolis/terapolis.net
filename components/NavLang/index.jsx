import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'

class NavLang extends React.Component {
    render() {
        return (
            <div className='nav-lang'>

                <Link to={ prefixLink('/')} className={`nav-lang__link ${ location.pathname === prefixLink('/') ? 'is-selected' : null }`}>
                    Ua
                </Link>

                <Link to={ prefixLink('/ru')} className={`nav-lang__link ${ location.pathname === prefixLink('/ru') ? 'is-selected' : null }`}>
                    Ru
                </Link> 

            </div>
        );
    }
}

export default NavLang
