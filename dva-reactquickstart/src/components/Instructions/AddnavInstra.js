import React from 'react';
import styles from './AddnavInstra.css';
import { Input } from 'antd';
import { Form } from 'antd';
import { Modal,Button } from 'antd';
import { Row, Col } from 'antd';
import { Collapse } from 'antd';
import { Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
};
function handleChange(value) {
    console.log(`selected ${value}`);
};
const AddnavInstra = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    },
    /*模态框的一系列操作*/
    getInitialState:function(){
        return {
            visible: false
        };
    },
    showModal() {
        this.setState({
            visible: true,
        });
    },
    handleOk() {
        console.log('Clicked OK');
        this.setState({
            visible: false,
        });
    },
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    },
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.addnavwrap}>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="新建导航仪系列" key="1">
                        <Row>
                          <Form inline>
                            <Col span={24} style={{marginLeft:'25%'}}>
                                <FormItem label="选择系列">
                                    {getFieldDecorator('select', {rules:[{ required: true,message:'请选择系列'},],})
                                    (<Select showSearch style={{ width:300}} placeholder="请选择系列"
                                       optionFilterProp="children" onChange={handleChange} notFoundContent="">
                                       <Option value="jack">Jack</Option>
                                       <Option value="lucy">Lucy</Option>
                                       <Option value="tom">Tom</Option>
                                     </Select>)}
                                </FormItem>
                            </Col>
                            <Col span={24} className={styles.listcolorwrap} style={{marginLeft:'25%'}}>
                                <FormItem label="型号" hasFeedback>
                                    {getFieldDecorator('listmodel', {rules:[{required: true, message:'系列型号不能为空'}],})
                                    (<Input placeholder="请选择型号名称" style={{width:300}} />)}
                                </FormItem>
                            </Col>
                            <Col span={24} style={{marginLeft:'24.3%'}}>
                                <span><i className={styles.listcolor}>*</i>选择说明书 : </span>
                                <Button type="primary" onClick={this.showModal} style={{background:'#00cc00',border:'none',marginLeft:5}}>
                                 选择说明书
                                 </Button>
                                <span style={{fontSize:15,color:'#FF8800',marginLeft:20}}>已选择 : </span>

                            </Col>
                            <Col span={24} style={{marginLeft:'37%'}}>
                                    <Button type="primary" size="large"
                                     style={{width:150,marginTop:30,background:"#23c0fa",border:'none'}} onClick={this.handleSubmit}>确认保存</Button>
                            </Col>
                          </Form>
                        </Row>
                    </Panel>
                </Collapse>
                <Modal visible={this.state.visible} title="选择说明书" onCancel={this.handleCancel}
                  footer={[<Button key="back" type="ghost" size="large" onClick={this.handleCancel}>取消</Button>,
                  <Button key="submit" type="primary" size="large" onClick={this.handleOk}>确定</Button>,]}>
                </Modal>
            </div>
    );
    },
}));

export default AddnavInstra;
