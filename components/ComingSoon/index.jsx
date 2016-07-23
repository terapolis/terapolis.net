import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import NavLang from '../NavLang'
import SitePage from '../SitePage'

import './style.scss'
import iconFb from './iconFb.png'

class ComingSoon extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='coming-soon' style={{ display: 'block' }}>

                <NavLang {...this.props}/>

                <Link to={ prefixLink('/')} className='coming-soon__logo'>
                    <img className='coming-soon__logo-img' src={ prefixLink('/logo.png') } alt='Теsl’ar Logo' />
                    <div className='coming-soon__slogan'>{ page.contentSlogan }</div>
                </Link>

                <h1 className='coming-soon__title'>{ page.contentTitle }</h1>

                <div className='coming-soon__section'>

                    <h2>{ page.contentSoon }</h2>
                    <div className='fb'>
                        <h3>{ page.contentFacebook }</h3>

                        <a className='coming-soon__link' href={ config.siteFbUrl } target='_blank'>{ page.contentLink }</a>
                    </div>

                </div>

                <div className='coming-soon__copyright'>2013 - 2016 © Tesl’ar</div>
                <div className='coming-soon__powered'>
                    Powered by <a href={ config.poweredUrl } className='coming-soon__powered-link' target='_blank'>{ config.poweredTitle }</a>
                </div>

            </div>
        );
    }
}

SitePage.propTypes = {
    page: React.PropTypes.object.isRequired,
}

export default ComingSoon
