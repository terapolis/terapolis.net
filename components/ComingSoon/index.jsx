import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import NavLang from '../NavLang'
import SitePage from '../SitePage'
import Ink from 'react-ink'

import './style.scss'
import teslarLogo from './teslarLogo.svg'
import iconFacebook from '../../static/img/svg-icons/facebook.svg'
import bgPlane from './bgPlane.jpg'
import bgManufactory from './bgManufactory.jpg'

class ComingSoon extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='coming-soon'>

                <NavLang {...this.props}/>

                <Link to={ prefixLink('/home') } className='coming-soon__logo-link'>
                    <img className='coming-soon__logo-img' src={ prefixLink(teslarLogo) } alt='Теsl’ar Logo' />
                    <div className='coming-soon__logo-slogan'>{ page.contentSlogan }</div>
                    <Ink />
                </Link>

                <div className='coming-soon__title'>{ page.contentTitle }</div>

                <div className='coming-soon__soon'>
                    <div className='coming-soon__soon-left'>{ page.contentSoon }</div>
                    <div className='coming-soon__soon-right'>
                        <div className='coming-soon__fb-title'>{ page.contentFacebook }</div>
                        <a className='coming-soon__fb-link' href={ config.siteFbUrl } target='_blank'>
                            <span className='coming-soon__fb-link-cell'>{ page.contentLink }</span>
                            <span className='coming-soon__fb-link-cell'>
                                <img className='coming-soon__fb-link-svgicon' src={ prefixLink(iconFacebook) }/>
                            </span>
                        </a>
                    </div>
                </div>

                <div className='coming-soon__copyright'>2013 - 2016 © Tesl’ar</div>
                <div className='coming-soon__powered'>
                    Powered by <a href={ config.poweredUrl } className='coming-soon__powered-link' target='_blank'>{ config.poweredTitle }</a>
                </div>

                <img src={ prefixLink(bgPlane) } style={{ display: 'none' }} />
                <img src={ prefixLink(bgManufactory) } style={{ display: 'none' }} />

            </div>
        );
    }
}

SitePage.propTypes = {
    page: React.PropTypes.object.isRequired,
}

export default ComingSoon
