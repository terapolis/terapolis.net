import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Ink from 'react-ink'
import { config } from 'config'

import './style.scss'
import iconFbSvg from '../ComingSoon/iconFb.svg'

class Footer extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='footer'>

                <div className='footer__nav'>
                    <a className='footer__link' href={ config.siteFbUrl } target='_blank'>
                        <img className='footer__svgicon' src={ prefixLink(iconFbSvg) }/>
                    </a>
                </div>

                <div className='footer__copyright'>2013 - 2016 © Tesl’ar</div>
                <div className='footer__powered'>
                    Powered by <a href={ config.poweredUrl } className='footer__powered-link' target='_blank'>{ config.poweredTitle }</a>
                </div>

            </div>
        );
    }
}

Footer.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object.isRequired,
}

export default Footer
