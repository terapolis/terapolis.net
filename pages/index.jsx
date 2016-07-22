import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import NavLang from '../components/NavLang'
import ComingSoon from '../components/ComingSoon'

import './style.scss'

class SiteIndex extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
                <div>
                    <NavLang/>
                    <ComingSoon/>
                </div>
            </DocumentTitle>
        )
    }
}

export default SiteIndex
