import React from 'react';
import reqwest from 'reqwest';
import styles from './Userstatistics.css';

import { Row, Col } from 'antd';
import { message,Button,Input } from 'antd';
import { Table } from 'antd';
import { Select,Modal} from 'antd';
import { DatePicker } from 'antd';
import { Form } from 'antd';
const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;

let store = {};
const Userstatistics= Form.create()(React.createClass({
    /*手机号的值和日历的值*/
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(typeof values['range-picker'] !== 'undefined' && values['range-picker'].length > 0){
                    store['start_time'] = values['range-picker'][0].format('YYYY-MM-DD');
                    store['end_time'] = values['range-picker'][1].format('YYYY-MM-DD');
                }else{
                    store['start_time'] = '';
                    store['end_time'] = '';
                }
                if(typeof values.phone_number=='undefined' || values.phone_number==''){
                    store.phone_number=''
                }else{
                    var myreg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                    if(!myreg.exec(values.phone_number)){
                        message.error('请输入正确的手机号');
                        return false;
                    }
                    else{
                        message.success('手机号正确');
                        store.phone_number=values.phone_number
                    }
                }
                console.log('Received values of form: ', values);
                console.log(store)
                this.fetch(store);
            }
        });
    },
    /*日期创建时间*/
    onChange:function(date, dateString) {
        console.log(date, dateString);
    },
    /*表单一系列操作*/
    getInitialState() {
        return {
            data: [],
            pagination: {},
            loading: false,
            count:'',
            visible: false,
            sel:'',
            index:'',
        };
    },
    /*弹框*/
    showModal() {
        this.setState({
            visible: true,
        });
    },
    /*点击确定备注信息*/
    handleOk(e) {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                reqwest({
                    url: 'http://qzzg.w2.youfen8.com/api/member/'+this.state.sel+'?remark='+values.remark,
                    method: 'PUT',
                    type: 'json',
                }).then((data) => {
                    console.log(data)
                    if( data.code == 200){
                        let tableData = this.state.data;
                        const index = this.state.index;
                        tableData[index].remark=values.remark
                        this.setState({
                            data:tableData,
                            visible:false,
                        });
                        message.success(data.msg || '信息备注成功');
                    }
                    else{
                        message.error(data.errmsg);
                        return false;
                    }
                });
            }
        });
    },
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    },
    handleTableChange(pagination, filters) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });

        store.page = pagination.current;
        store.page_size = pagination.page_size;
        this.fetch(store);
    },
    fetch(params = {}) {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'http://qzzg.w2.youfen8.com/api/member',
            method: 'GET',
            data: {
                 ...params,
            },
            type: 'json',
    }).then((data) => {
        const pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = data.total;
        this.setState({
            loading: false,
            data: data.data,
            pagination,
            count:data.count,
        });
    });
    },
    /*备注*/
    remark(id,record,index){
        console.log(id,record,index)
        this.setState({
            visible: true,
            sel:id.id,
            index:index,
        });
    },
    componentDidMount() {
        this.fetch();
    },
    render() {
        const self = this;
        /*列表的列数据*/
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            width:'20%',
        }, {
            title: 'openId',
            dataIndex: 'openid',
            width:'20%',
        }, {
            title: '手机号',
            dataIndex: 'phone_number',
            width:'20%',
        }, {
            title: '注册时间',
            dataIndex: 'created_at',
            width:'20%',
        },]
        //}, {
        //    title: '操作',
        //    render: (text,record,index) => {
        //        return (
        //            <span>
        //              <a href="javascript:;" onClick={function(){self.remark(text,record,index)}}>备注</a>
        //            </span>
        //        );
        //    }
        //}];
        const {getFieldDecorator}=this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <div className={styles.listwrap}>
                <div className={styles.searchwrap}>
                    <Row>
                        <Form inline>
                            <Col span={8}>
                                <FormItem label="手机号"  {...formItemLayout}>
                                    {getFieldDecorator('phone_number')
                                    (<Input placeholder="输入手机号" style={{ width: 200 }}/>)}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem label="注册时间" {...formItemLayout}>
                                    {getFieldDecorator('range-picker')
                                    (<RangePicker onChange={this.onChange}/>)}
                                </FormItem>
                            </Col>
                        </Form>
                        <Col span={2}>
                            <Button type="primary" onClick={this.handleSubmit}>搜索</Button>
                        </Col>
                        <Col span={3}>
                            <Button type="ghost">导出数据</Button>
                        </Col>
                    </Row>
                </div>
                <div className={styles.tablewrap}>
                    <div>
                        <span style={{fontSize:16,marginRight:80}}>用户统计</span>
                        <span>总用户数 :{this.state.count} </span>
                    </div>
                    <Table columns={columns}
                        dataSource={this.state.data} pagination={this.state.pagination} loading={this.state.loading}
                        onChange={this.handleTableChange}/>
                </div>
                <Form onSubmit={this.handleOk} >
                    <Modal title="备注信息" style={{ top: 300 }} visible={this.state.visible} onOk={this.handleOk} htmlType="submit" onCancel={this.handleCancel}>
                        <FormItem {...formItemLayout} label="备注">
                            {getFieldDecorator('remark')
                            (<Input style={{width:300}}/>)}
                        </FormItem>
                    </Modal>
                </Form>
            </div>
        );
    },
}));

export default Userstatistics;
