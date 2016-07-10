import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import ComingSoon from '../components/ComingSoon'

class SiteIndex extends React.Component {
    render() {

        return (
            <DocumentTitle title={ config.siteTitle }>
                <ComingSoon {...this.props}/>
            </DocumentTitle>
        )
    }
}

export default SiteIndex
