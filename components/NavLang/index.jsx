import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Ink from 'react-ink'

import './style.scss'

class NavLang extends React.Component {
    render() {
        const {location} = this.props

        return (
            <div className='nav-lang'>

                <Link to={ prefixLink('/')} className={`nav-lang__link ${ location.pathname === prefixLink('/') ? 'is-selected' : null }`}>
                    Ua
                    <Ink />
                </Link>

                <Link to={ prefixLink('/en/')} className={`nav-lang__link ${ location.pathname === prefixLink('/en/') ? 'is-selected' : null }`}>
                    En
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/ru/')} className={`nav-lang__link ${ location.pathname === prefixLink('/ru/') ? 'is-selected' : null }`}>
                    Ru
                    <Ink />
                </Link> 

            </div>
        );
    }
}

NavLang.propTypes = {
    location: React.PropTypes.object,
}

export default NavLang
