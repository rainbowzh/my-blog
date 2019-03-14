import React, { Component } from 'react';
import './index.scss';

import Header from '../../component/header';
import Menus from '../../component/menus';

class Home extends Component{
    render(){
        return(
            <div className="home-block">
                <Header/>
                <div className="nav-block">
                    <Menus/>
                </div>
                <div className="main-block">
                    我是文章呢
                </div>
            </div>
        )
    }
}
export default Home;