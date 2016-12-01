import React from 'react';
import reqwest from 'reqwest';
import styles from './Userstatistics.css';

import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Table } from 'antd';
import { Select } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
/*列表的列数据*/
const columns = [{
    title: 'id',
    dataIndex: 'name',
    width: '10%',
}, {
    title: 'openId',
    dataIndex: 'gender',
    width: '15%',
}, {
    title: '手机号',
    width: '20%',

}, {
    title: '注册时间',
    width: '20%',

}, {
    title: '操作',
        width: '20%',
        render: () => <a href="#">操作</a>,
}];
const Userstatistics= React.createClass({
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
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
    });
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
        return (
            <div className={styles.listwrap}>
                <div className={styles.searchwrap}>
                    <Row>
                        <Col span={7}>
                            <span>系列 : </span>
                            <Select showSearch style={{ width: 180 }} placeholder="不限"
                                optionFilterProp="children" onChange={this.handleChange} notFoundContent="">
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                        <Col span={12}>
                            <span>注册时间 : </span>
                            <RangePicker onChange={this.onChange} />
                        </Col>
                        <Col span={2}>
                            <Button type="primary">搜索</Button>
                        </Col>
                        <Col span={2}>
                            <Button type="ghost">导出数据</Button>
                        </Col>
                    </Row>
                </div>
                <div className={styles.tablewrap}>
                    <div><span style={{fontSize:16,marginRight:80}}>用户统计</span>
                         <span>总用户数 : </span>
                    </div>
                    <Table columns={columns} rowKey={record => record.registered}
                        dataSource={this.state.data} pagination={this.state.pagination} loading={this.state.loading}
                        onChange={this.handleTableChange}/>
                </div>
            </div>
    );
    },
});

export default Userstatistics;
