import React from 'react';
import {Icon } from 'antd';
import styles from './Example.css';
import Home from './Home';
import { Menu, Dropdown } from 'antd';

const Example = React.createClass({
  render(){
      const menu = (
          <Menu>
            <Menu.Item key="0">
              <a href="#">设置</a>
            </Menu.Item>
            <Menu.Item key="1">
              <a href="#">退出登录</a>
            </Menu.Item>
          </Menu>
      );
  return (
    <div className={styles.allWrap}>
      <div className={styles.navWrap}>
        <Home/>
      </div>
      <div className={styles.headerwrap}>
         <div className={styles.helpwrap}>
           <div><i className="iconfont icon-setting"></i>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#"><span className={styles.settings}>设置</span></a>
                </Dropdown>
                <span>
                  <i className="iconfont icon-icon" style={{fontSize:25}}></i>
                </span>
                <span className={styles.settings}>管理员</span>
           </div>
         </div>
      </div>

      <div className={styles.showwrap}>
          {this.props.children}
      </div>
    </div>
  )
}
});


export default Example;
