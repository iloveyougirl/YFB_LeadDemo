import React from 'react';
import reqwest from 'reqwest';
import styles from './Book.css';
import { Link } from 'dva/router';

import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Table } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { Form } from 'antd';
const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
/*列表的列数据*/
const columns = [{
    title: 'id',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '10%',
}, {
    title: '系列',
        dataIndex: 'gender',
        width: '15%',
    //    filters: [
    //    { text: 'Male', value: 'male' },
    //    { text: 'Female', value: 'female' },
    //],
}, {
    title: '型号',
        width: '15%',
}, {
    title: '说明书名称',
        width: '20%',
}, {
    title: '创建时间',
        width: '20%',
        sorter: true,
        render: name => `${name.first} ${name.last}`,
}, {
    title: '操作',
        width: '20%',
        render: () => <a href="#">编辑</a>,
}];

let store = {};
const Book = Form.create()(React.createClass({
    infosave(e) {
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
                console.log()
                store.listsomething = values.listsomething;
                store.name = values.name;
                this.fetch(store);
            }
    });
    },
    /*新建按钮*/
    callback:function(key) {
        console.log(key);
    },
    /*系列下拉框*/
    handleChange:function (value) {
        console.log(`selected ${value}`);
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
        };
    },
    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        console.log(pager)
        this.setState({
            pagination: pager,
        });
        store.page = pagination.current;
        store.page_size = pagination.page_size;
        store.field = sorter.field;
        store.order = sorter.order;
        console.log(filters)
        this.fetch(store);
    },
    fetch(params = {}) {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
                url: 'https://randomuser.me/api',
                method: 'get',
                data: {
                    results: 10,
                    ...params,
                },
                type: 'json',
        }).then((data) => {
            const pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        console.log(this.state.pagination);
        this.setState({
            loading: false,
            data: data.results,
            pagination,
        });
    });
    },
    componentDidMount() {
        this.fetch();
    },

    render() {
        const {getFieldDecorator}=this.props.form;
        return (
            <div>
                <Row>
                  <Form inline>
                    <Col span={3}>
                        <Button type="primary" size="large" style={{ background:'#00cc00',border:'none' }}>
                          <Link to='AddnavInstra'>新建</Link>
                        </Button>
                    </Col>
                    <Col span={4}>
                        <FormItem label="系列">
                            {getFieldDecorator('listsomething')
                            (<Select showSearch style={{ width:180}} placeholder="不限"
                                optionFilterProp="children" onChange={this.handleChange} notFoundContent="">
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                             </Select>)}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem label="说明书名称">
                            {getFieldDecorator('name')
                            (<Input placeholder="Basic usage" style={{ width: 200 }}/>)}
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem label="创建时间">
                            {getFieldDecorator('range-picker')
                            (<RangePicker onChange={this.onChange}/>)}
                        </FormItem>
                    </Col>
                    <Col span={2}>
                        <Button type="primary" onClick={this.infosave}>搜索</Button>
                    </Col>
                    <Col span={2}>
                        <Button type="ghost">导出数据</Button>
                    </Col>
                  </Form>
                </Row>
                <div className={styles.tablewrap}>
                    <div><span style={{fontSize:16,marginRight:80}}>导航仪</span>
                         <span>系列 : </span>
                         <span>型号 : </span>
                    </div>
                    <Table columns={columns} rowKey={record => record.registered}
                        dataSource={this.state.data} pagination={this.state.pagination} loading={this.state.loading}
                        onChange={this.handleTableChange}/>
                 </div>
            </div>
    );
    },
}));

export default Book;
