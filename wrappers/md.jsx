import React from 'react'
import DocumentTitle from 'react-document-title'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import ComingSoon from '../components/ComingSoon'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import { config } from 'config'

import './style.scss'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout === 'post') {
            template = <SitePost {...this.props}/>
        } else if (layout === 'page') {
            template = <SitePage {...this.props}/>
        } else if (layout === 'ComingSoon') {
            template = <ComingSoon {...this.props}/>
        }

        return (
            <DocumentTitle title={ `${config.siteTitle} - ${post.title}` }>
                <div className='flex-sticky'>
                    <div className='flex-sticky__content'>
                        <MainMenu {...this.props} />
                        <div className='main-container'>
                            { template }
                        </div>
                    </div>
                    <Footer {...this.props} />
                </div>
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
