import React from 'react';
import styles from './Addnav.css';
import reqwest from 'reqwest';
import { Input,Button,message } from 'antd';
import { Form ,notification, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
const FormItem = Form.Item;

const Addnav = Form.create()(React.createClass({
    getInitialState() {
        return {
            listName:'',
        };
    },
    infosave(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form:', values);
                reqwest({
                    url: 'http://qzzg.w2.youfen8.com/api/allseries/'+'?name='+values.name,
                    method: 'POST',
                    type: 'json',
                }).then((data) => {
                    if( data.code == 200){
                        notification.open({
                            message:'温馨提示：',
                            description: '该项已保存成功',
                            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
                        });
                      this.setState({
                          listName:'',
                      });
                    }
                    else{
                        message.error(data.errmsg);
                        return false;
                    }
                });
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
                                        {getFieldDecorator('name', {rules:[{required: true, message:'系列类型不能为空'}],})
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
