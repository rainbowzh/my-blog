import React ,{ Component } from 'react';
import './index.scss';

const iconSweet = require('../../images/iconSweet.svg');

export default class Header extends Component {
    render() {
        return(
            <div className="header-block">
                <span className="log-block">
                    <img src={iconSweet} alt=""/>
                </span>
                <h1>Sma's blog</h1>
                <p>if you can't measure it ,you can't imporve it</p>
            </div>
        )
    }
}