import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Ink from 'react-ink'

import './style.scss'

class MainMenu extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='main-menu'>

                <Link to={ prefixLink('/')} className='main-menu__link'>
                    Комінг сун
                    <Ink />
                </Link>

                <Link to={ prefixLink('/home')} className={`main-menu__link ${ location.pathname === prefixLink('/home') ? 'is-selected' : null }`}>
                    Домашня
                    <Ink />
                </Link>

                <Link to={ prefixLink('/about')} className={`main-menu__link ${ location.pathname === prefixLink('/about') ? 'is-selected' : null }`}>
                    Про нас
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/catalog')} className={`main-menu__link ${ location.pathname === prefixLink('/catalog') ? 'is-selected' : null }`}>
                    Каталог
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/portfolio')} className={`main-menu__link ${ location.pathname === prefixLink('/portfolio') ? 'is-selected' : null }`}>
                    Портфоліо
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/furniture-restoration')} className={`main-menu__link ${ location.pathname === prefixLink('/furniture-restoration') ? 'is-selected' : null }`}>
                    Реставрація меблів
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/for-partners')} className={`main-menu__link ${ location.pathname === prefixLink('/for-partners') ? 'is-selected' : null }`}>
                    Партнерам
                    <Ink />
                </Link> 

                <Link to={ prefixLink('/contacts')} className={`main-menu__link ${ location.pathname === prefixLink('/contacts') ? 'is-selected' : null }`}>
                    Контакти
                    <Ink />
                </Link> 

            </div>
        );
    }
}

MainMenu.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object.isRequired,
}

export default MainMenu
