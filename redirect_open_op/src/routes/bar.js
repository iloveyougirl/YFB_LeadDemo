import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './bar.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = React.createClass({
    getInitialState() {
        return {
            current: 'home',
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <div >
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                    <Menu.Item key="home" style={{marginLeft:"15%"}}><Link to="/">首页</Link></Menu.Item>
                    <Menu.Item key="manage" style={{marginLeft:"7%"}}><Link to="/manage">网址管理</Link></Menu.Item>
                    <Menu.Item key="count" style={{marginLeft:"7%"}}>访问统计</Menu.Item>
                    <Menu.Item key="detail" style={{marginLeft:"7%"}}>访问明细</Menu.Item>
                    <Menu.Item key="clear" style={{marginLeft:"7%"}}>清空缓存</Menu.Item>
                </Menu>
                <div className={styles.a}>LOGO</div>
                <div className={styles.b}>{this.props.children}</div>
            </div>
            
        );
    },
});


export default App;
