import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import styles from './Home.css';
import { Link } from 'dva/router';

const NavSider = React.createClass({
    getInitialState() {
        return {
            current: '1',
            openKeys: [],
        };
    },
    handleClick(e) {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    },
    onOpenChange(openKeys) {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    },
    getAncestorKeys(key) {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    },
    render() {
        return (
            <div>
                <div className={styles.title}>优粉吧</div>
                <div>
                    <Menu mode="inline" theme='dark' openKeys={this.state.openKeys} selectedKeys={[this.state.current]}
                            style={{ width: 240 }} onOpenChange={this.onOpenChange} onClick={this.handleClick} >
                        <SubMenu key="sub1" title={<span><i className="iconfont icon-daohang"
                            style={{fontSize:10,marginRight:10}}></i><span> 导航仪 </span></span>}>
                            <Menu.Item key="1"><Link to='/'>导航仪管理</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/Userstatistics'>用户统计</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/Uploadimg'>页面设置</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className={styles.textwrap}>
                    <div className={styles.text}>优粉吧</div>
                    <div className={styles.textcontent}>提供技术支持</div>
                </div>
            </div>
        );
    },
});

export default NavSider;

