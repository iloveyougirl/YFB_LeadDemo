import React from 'react';
import styles from './Instructions.css';
import Listmanagement from './Listmanagement/Listmanagement';
import Book from './Listmanagement/Book';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


const Instruction = React.createClass({
render() {
        return (
            <div className={styles.listwrap}>
              <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="说明书管理" key="1">
                  <div>

                    <Book/>

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
