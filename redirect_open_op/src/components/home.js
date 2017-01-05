import React from 'react';
import { Table } from 'antd';
import axios from 'axios';

const Test = React.createClass({
    getInitialState() {
        return {
            data: [],
            pagination: {},
            loading: false,
        };
    },
    handleTableChange(pagination,sorter) {
        console.log(pagination,sorter)
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results:pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
        });
    },
    fetch(params = {}) {
        console.log('params:', params);
        this.setState({ loading: true });
        axios.get("http://op.redirect.w2.youfen8.com/api/jumpurls",{
            params:{
                ...params,
            }
        })
        .then((data) =>{
            console.log(data.data)
            const pagination = this.state.pagination;
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 100;
            this.setState({
                loading: false,
                data: data.data,
                pagination,
            });
        })
        // reqwest({
        //     url: 'https://randomuser.me/api',
        //     method: 'get',
        //     data: {
        //     results: 10,
        //     ...params,
        //     },
        //     type: 'json',
        // }).then((data) => {
        //     const pagination = this.state.pagination;
        //     // Read total count from server
        //     // pagination.total = data.totalCount;
        //     pagination.total = 200;
        //     this.setState({
        //         loading: false,
        //         data: data.results,
        //         pagination,
        //     });
        // });
    },

    componentDidMount() {
        this.fetch();
    },
    render() {
        const columns = [{
            title: 'id',
            key:1,
            dataIndex: 'id',
        }, {
            title: '名称',
            key:2,
            dataIndex: 'name',
        }, {
            title: '短网址',
            key:3,
            dataIndex: 'short_url',
        }, {
            title: '跳转网址',
            key:4,
            dataIndex: 'redirect_uri',
            render:(url) => (
                <div>  
                    <a href={url}>跳转链接</a>
                </div>
            ),
        }, {
            title: '今日PV/UV',
            key:5,
            dataIndex: "1",
            sorter: true,
            render:(e) => (
                <div>{e.pv}/{e.uv}</div>
            )

        }, {
            title: '昨日PV/UV',
            key:6,
            dataIndex:'0',
            sorter: true,
            render:(e) => (
                <div>{e.pv}/{e.uv}</div>
            )
        }, {
            title: '操作',
            key:7,
            dataIndex: 'id',
            render:(text,record) => (
                <span>
                  <a href="#">统计</a>
                  <span className="ant-divider" />
                  <a href="#">明细</a>
                </span>
            )
        }]; 
       
        const pagination={
            defaultCurrent:1, 
            total:50,
            showQuickJumper:true,
            showSizeChanger:true,
        }
        return (
            <div>
                <Table columns={columns}
                    rowKey={record => record.id}
                    dataSource={this.state.data}
                    pagination={pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>
            
        );
    },
});
export default Test;
