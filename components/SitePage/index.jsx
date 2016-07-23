import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import NavLang from '../NavLang'
import './style.scss';

class SitePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div className='site-page'>
                <NavLang {...this.props}/>
                <h2>{ post.layout }</h2>
                <h1>{ post.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.body}}/>
            </div>
        );
    }
}

SitePage.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePage
