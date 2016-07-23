import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'

class NavLang extends React.Component {
    render() {
        const {location} = this.props

        return (
            <div className='nav-lang'>

                <Link to={ prefixLink('/')} className={`nav-lang__link ${ location.pathname === prefixLink('/') ? 'is-selected' : null }`}>
                    Ua
                </Link>

                <Link to={ prefixLink('/en/')} className={`nav-lang__link ${ location.pathname === prefixLink('/en/') ? 'is-selected' : null }`}>
                    En
                </Link> 

                <Link to={ prefixLink('/ru/')} className={`nav-lang__link ${ location.pathname === prefixLink('/ru/') ? 'is-selected' : null }`}>
                    Ru
                </Link> 

            </div>
        );
    }
}

NavLang.propTypes = {
    location: React.PropTypes.object,
}

export default NavLang
