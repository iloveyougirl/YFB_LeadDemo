import React from 'react';
import styles from './Instructions.css';
import Listmanagement from './Listmanagement/Listmanagement';
import { Tabs } from 'antd';
import { Link } from 'dva/router';
const TabPane = Tabs.TabPane;


const Instruction = React.createClass({
render() {
        return (
            <div className={styles.listwrap}>
              <Tabs defaultActiveKey="1" onChange={this.callback} animated={false}>
                <TabPane tab={<span><Link to='/'>型号管理</Link></span>} key="1">
                  <div>
                    {this.props.children}
                  </div>
                </TabPane>
                <TabPane tab="系列管理" key="2">
                  <Listmanagement/>
                </TabPane>
              </Tabs>
            </div>
        );
    },
});

export default Instruction;
