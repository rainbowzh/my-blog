import React, { Component } from 'react';
import './index.scss';

import { Menu } from 'antd';



const categories = ['首页' , 'ios' , 'python' , 'reactjs'];




export default class Menus extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current : categories[0]
        }
    }

    handleClick = (e) => {
        this.setState({
            current : e.key
        })
    }
    render(){
        return(
            <Menu 
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="menu-block">
                {
                    categories.map((item,index) => {
                        return(
                            <Menu.Item key={item} className="menus-item">
                                {item}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }
}