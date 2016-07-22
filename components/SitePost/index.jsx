import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReadNext from '../ReadNext'

import './style.scss'
// import '../../static/css/highlight.css'

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        const home = (
            <div>
                <Link className='gohome' to={ prefixLink('/') }> Home
                </Link>
            </div>
        )

        return (
            <div>
                { home }
                <div className='blog-single'>
                    <div className='text'>
                        <h2>{ post.layout }</h2>
                        <h1>{ post.title }</h1>
                        <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                        <div className='date-published'>
                            <em>Published { moment(post.date).format('D MMM YYYY') }</em>
                        </div>
                    </div>
                    <div className='footer'>
                        <ReadNext post={ post } {...this.props}/>
                        <hr></hr>
                        <p>{ config.siteDescr }
                            <br></br>
                            <a href={ config.siteLinkedinUrl }><strong>{ config.siteAuthor }</strong> on LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

SitePost.propTypes = {
        post: React.PropTypes.object.isRequired,
        pages: React.PropTypes.array,
}

export default SitePost
