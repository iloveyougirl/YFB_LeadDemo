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

let store = {};
const Listmanagement = Form.create()(React.createClass({
    /*增删改查中的编辑*/
    edit(id,record,index){
        console.log(id,record,index)
        this.setState({
            list:id.name,
            index:index,
            editid:id.id,
        });
        this.setState({
            visible:true,
        });
    },
    /*增删改查中的删除*/
    del(id,record,index){
        console.log(id,record,index)
        console.log(this.state.needPage)
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
            if(typeof this.state.needPage=='undefined' ||this.state.needPage==''){
                this.setState({
                    needPage:1,
                });
            }
            tableData.splice(parseInt(index+10*[this.state.needPage-1]),1);
            this.setState({
              data:tableData,
            });
            notification.open({
                message: '温馨提示：',
                description: '该项已删除',
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            });
       });
    },
    handleOk(e) {
            this.props.form.validateFields((err, values) => {
                console.log(values)
            if (!err) {
            console.log('Received values of form:', values);
            reqwest({
                url: 'http://qzzg.w2.youfen8.com/api/allseries/'+this.state.editid,
                data:{
                   name:values.name,
                },
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
                   message.success(data.msg || '修改成功');
                }
                else{
                  message.error(data.errmsg);
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
    searchsave(e) {
        e.preventDefault();
        console.log(this.state.sel)
         if (typeof this.state.sel=='undefined' || this.state.sel==''){
             this.fetch(store);
        }
        else{
            reqwest({
                url: 'http://qzzg.w2.youfen8.com/api/allseries/'+this.state.sel,
                method: 'get',
                type: 'json',
            }).then((data) => {
                console.log(data)
             const pagination = this.state.pagination;
             pagination.total = 1;
                this.setState({
                    data:[data],
                });
              });
             //this.fetch(this.state.data);
         }
    },
    /*新建按钮*/
    callback:function(key) {
        console.log(key);
    },
    /*系列下拉框*/
    handleChange:function (value) {
        this.setState({
            sel: value
        });
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
            sel:'',
            copydata:[],
            needPage:'',
        };
    },
    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
            needPage:pagination.current,
        });
        console.log(this.state.needPage)
        if(sorter.order=='descend'){
            sorter.order='desc'
        }
        else if(sorter.order=='ascend'){
            sorter.order='asc'
        }
        store.page = pagination.current;
        store.page_size = pagination.page_size;
        store.order = sorter.order;
        this.fetch(store);
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
        console.log(this.state.pagination)
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = data.count;
        this.setState({
            loading: false,
            data:data.data,
            copydata:data.data,
            count:data.count,
            pagination,
        });
    });
    },
    componentDidMount() {
        this.fetch();
    },
    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const self = this;
        /*列表的列数据*/
        const columns = [{

            title: 'id',
            dataIndex: 'id',
            width:'10%',
        }, {
            title: '系列',
            width:'10%',
            dataIndex: 'name',
        }, {
            title: '创建时间',
            width:'20%',
            dataIndex: 'created_at',
            sorter: true,
        }, {
            title: '操作',
            width:'20%',
            render: (text,record,index) => {
                return (
                  <span>
                    <a href="javascript:;" onClick={function(){self.edit(text,record,index)}}>编辑</a>
                    <span className="ant-divider" />
                    <Popconfirm title="是否删除?" onConfirm={function(){self.del(text,record,index)}} okText="Yes" cancelText="No">
                        <a href="#">删除</a>
                    </Popconfirm>
                  </span>
                );
            },
        }];
        const {getFieldDecorator}=this.props.form;
        return (
            <div>
                  <Row>
                    <Col span={14}>
                      <Button type="primary" size="large" style={{ background:'#00cc00',border:'none' }}>
                        <Link to='Addnav'>添加</Link>
                      </Button>
                    </Col>
                      <Col span={6}>
                            <Form inline>
                                <FormItem label="系列">
                                        <Select showSearch style={{ width:180}} placeholder="不限" allowClear
                                            optionFilterProp="children" onChange={this.handleChange} notFoundContent="">
                                              {
                                                 this.state.copydata.map(
                                                   function(e){
                                                     return <Option key={e.id} value={`${e.id}`}>{e.name}</Option>
                                                   }
                                                 )
                                              }
                                        </Select>
                                </FormItem>
                                <FormItem>
                                  <Button type="primary" onClick={this.searchsave}>搜索</Button>
                                </FormItem>
                            </Form>
                      </Col>
                  </Row>
                  <div className={styles.tablewrap}>
                    <div><span style={{fontSize:16,marginRight:80}}>导航仪</span>
                         <span>系列 : {this.state.count}</span>
                    </div>
                    <Table columns={columns}
                      dataSource={this.state.data} pagination={this.state.pagination} loading={this.state.loading}
                      onChange={this.handleTableChange}/>
                  </div>
                <Form onSubmit={this.handleOk}>
                  <Modal title="编辑" style={{ top: 300 }} visible={this.state.visible} onOk={this.handleOk} htmlType="submit" onCancel={this.handleCancel}>
                   <FormItem label="系列" {...formItemLayout}>
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
