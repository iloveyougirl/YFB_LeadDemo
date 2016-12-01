import React from 'react';
import reqwest from 'reqwest';
import styles from './Listmanagement.css';
import { Link } from 'dva/router';

import { Row, Col } from 'antd';
import { Input,Modal,Button } from 'antd';
import { Table } from 'antd';
import { Select } from 'antd';
import { Form } from 'antd';
import { Popconfirm,message} from 'antd';
import { notification, Icon } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;


const Listmanagement = Form.create()(React.createClass({
    /*增删改查中的编辑*/
    edit(id,record){
        this.setState({
            list:id.name,
            index:record.key
        });
        this.setState({
            visible: true,
        });
    },
    /*增删改查中的删除*/
    del(id,index){
        console.log(id,index)
        reqwest({
            url: 'http://qzzg.w2.youfen8.com/api/allseries/'+id.id,
            method: 'delete',
            type: 'json',
        }).then((data) => {
            if(typeof data.errmsg !== 'undefined'){
              message.error(data.errmsg);
              return false;
            }
            let tableData = this.state.data;
            tableData.splice(parseInt(index),1);
            this.setState({
              data:tableData,
            });
                notification.open({
                message: '删除成功',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    });
       });
    },
    handleOk(e) {
            this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form:', values);
            reqwest({
                url: 'http://qzzg.w2.youfen8.com/api/allseries/'+this.state.id+'?name='+values.name,
                method: 'put',
                type: 'json',
            }).then((data) => {
                if( data.code == 200){
                    let tableData = this.state.data;
                    const index = this.state.index;
                    tableData[index].name=values.name
                    this.setState({
                        data:tableData,
                        visible:false,
                    });
                   message.success(res.msg || '修改成功');
                }
                else{
                  message.error(res.errmsg);
                  return false;
                }
        });

            }
        });

        //this.setState({
          //  visible: false,
       // });
    },
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    },
    /*获取一系列的值*/
    infosave(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form:', values);
            //this.fetch(values);
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
    /*表单一系列操作*/
    getInitialState() {
        return {
            data: [],
            pagination: {},
            loading: false,
            visible: false,
            list:'',
            id:'',
            index:'',

        };
    },
    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        if(sorter.order=='descend'){
            sorter.order='desc'
        }
        else if(sorter.order=='ascend'){
            sorter.order='asc'
        }
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            order: sorter.order,
            ...filters,
    });
    },
    fetch(params = {}) {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
                url: 'http://qzzg.w2.youfen8.com/api/allseries',
                method: 'get',
                data: {
                    ...params,
                },
                type: 'json',
    }).then((data) => {
            const pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = data.count;
        this.setState({
            loading: false,
            data: data.data,
            pagination,
        });
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
            width: '10%',
        }, {
            title: '系列',
            dataIndex: 'name',
            width: '15%',
        }, {
            title: '创建时间',
            dataIndex: 'created_at',
            width: '20%',
            sorter: true,
        }, {
            title: '操作',
            width: '20%',
            render: (text,record,index) => {
                return (
                  <span>
                    <a href="javascript:;" onClick={function(){self.edit(text,record)}}>编辑</a>
                    <span className="ant-divider" />
                    <Popconfirm title="是否删除?" onConfirm={function(){self.del(text,record.index)}} okText="Yes" cancelText="No">
                        <a href="#">删除</a>
                    </Popconfirm>
                  </span>
                );
            },
        }];
        const {getFieldDecorator}=this.props.form;
        return (
            <div >
                <Form inline>
                  <Row>
                    <Col span={14}>
                      <Button type="primary" size="large" style={{ background:'#00cc00',border:'none' }}>
                        <Link to='Addnav'>添加</Link>
                      </Button>
                    </Col>

                      <Col span={6}>
                            <FormItem label="系列">
                                {getFieldDecorator('name1111')
                                (<Select showSearch style={{ width:180}} placeholder="不限"
                                    optionFilterProp="children" onChange={this.handleChange} notFoundContent="">
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>)}
                            </FormItem>
                      </Col>

                    <Col span={2}>
                      <Button type="primary" onClick={this.infosave}>搜索</Button>
                    </Col>
                  </Row>
                  <div className={styles.tablewrap}>
                    <div><span style={{fontSize:16,marginRight:80}}>导航仪</span>
                         <span>系列 : </span>
                    </div>
                    <Table columns={columns}
                      dataSource={this.state.data} pagination={this.state.pagination} loading={this.state.loading}
                      onChange={this.handleTableChange}/>
                  </div>
                  <Modal title="编辑" style={{ top: 300 }} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <FormItem label="系列">
                        {getFieldDecorator('name', {initialValue: this.state.list,rules: [{ required: true, message: '必填' }],})
                        (<Input style={{width:300}}/>)}
                    </FormItem>
                  </Modal>
                </Form>
            </div>
    );
    },
}));

export default Listmanagement;
