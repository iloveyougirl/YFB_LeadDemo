import React from 'react';
import styles from './Addnav.css';
import { Input,Button,message } from 'antd';
import { Form } from 'antd';
import { Row, Col } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
const FormItem = Form.Item;

const Addnav = Form.create()(React.createClass({
    infosave(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form:', values);
                message.success('保存成功');
           }
        });
    },
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.addnavwrap}>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="新建导航仪系列" key="1">
                        <Row>
                            <Col span={24} className={styles.listcolorwrap}>
                              <Form inline>
                                 <FormItem label="系列" hasFeedback>
                                     {getFieldDecorator('listtype', {rules:[{required: true, message:'系列类型不能为空'}],})
                                     (<Input placeholder="请输入系列类型" style={{width:300}} />)}
                                 </FormItem>
                              </Form>
                            </Col>
                            <Col span={24}>
                              <Button type="primary" size="large" style={{width:150}} onClick={this.infosave}>确认保存</Button>
                            </Col>

                        </Row>
                    </Panel>
                </Collapse>
            </div>
    );
    },
}));

export default Addnav;
