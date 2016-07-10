import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './style.scss'

class ComingSoon extends React.Component {
    render() {
        return (
            <div className='coming-soon'>
                <img className='logo' src={ prefixLink('/logo.png') } alt='Теsl’ar Logo' />

                <h1>Приветствуем вас на “комингсун” странице столярной мастерской Теsl’ar!</h1>

                <section>

                    <h2>Скоро<br></br>тут появится наш сайт</h2>
                    <div className='fb'>
                        <h3>Ну, а пока сайт строится, нас можно встретить в фейсбуке</h3>

                        <a href={ config.siteFbUrl } target='_blank'>Узнать больше о нас на страницах фейсбука</a>
                    </div>

                </section>

                <p className='copy'>2013 - 2016 © tesl’ar</p>
            </div>
        );
    }
}

export default ComingSoon
