import React from 'react';
import reqwest from 'reqwest';
import styles from './Book.css';
import { Link } from 'dva/router';

import { Row, Col } from 'antd';
import { Button} from 'antd';
import { Table } from 'antd';
import { Input,Popconfirm} from 'antd';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { notification,Icon,message} from 'antd';
import { Form } from 'antd';
const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
let store = {};
const Book = Form.create()(React.createClass({
    /*增删改查中的删除*/
    del(id,record,index){
        console.log(id,record,index)
        reqwest({
            url: 'http://qzzg.w2.youfen8.com/api/product/'+id.id,
            method: 'delete',
            type: 'json',
        }).then((data) => {
            if(typeof data.errmsg !== 'undefined'){
              message.error(data.errmsg);
              return false;
            }
            let tableData = this.state.data;
            //if(typeof this.state.needPage=='undefined'||this.state.needPage==''){
            //    this.setState({
            //        needPage:1,
            //    });
            //}
            tableData.splice(parseInt(index),1);
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
                if(typeof values.sid=='undefined'){
                    values.sid=''
                }
                if(typeof values.pdf=='undefined'||values.pdf==''){
                    values.pdf=''
                }
                store.sid = values.sid;
                console.log(values)
                store.pdf = values.pdf;
                this.fetch(store);
            }
    });
    },
    /*增删改查中的编辑*/
    edit(record){
        console.log(record)
        sessionStorage.setItem("id",record.id);
        sessionStorage.setItem("name",record.series.name);
        sessionStorage.setItem("modelname",record.name);
        sessionStorage.setItem("pdfname",record.pdf.name);
        //localStorage.setItem( = id;
        //this.setState({
        //    editid:id.id,
        //    editname:id.series.name,
        //    editmodelname:id.name,
        //    editpdfname:id.pdf.name,
        //    index:index,
        //});
        this.setState({
            visible:true
        });
    },
    /*模态框确定按钮*/
    //handleOk(e) {
    //    this.props.form.validateFields((err, values) = > {
    //        console.log(values)
    //    if (!err) {
    //        console.log('Received values of form:', values);
    //        reqwest({
    //            url: 'http://qzzg.w2.youfen8.com/api/allseries/' + this.state.id + '?name=' + values.name,
    //            method: 'put',
    //            type: 'json',
    //        }).then((data) = > {
    //            if(data.code == 200
    //    )
    //        {
    //            let tableData = this.state.data;
    //            const index = this.state.index;
    //            tableData[index].name = values.name
    //            this.setState({
    //                data: tableData,
    //                visible: false,
    //            });
    //            message.success(data.msg || '修改成功');
    //        }
    //    else
    //        {
    //            message.error(data.errmsg);
    //            return false;
    //        }
    //    })
    //        ;
    //
    //    }
    //});
    //},
    /*模态框删除按钮*/
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    },
    /*新建按钮*/
    callback:function(key) {
        console.log(key);
    },
    /*系列下拉框*/
    handleChange:function (value) {
        this.setState({
            sel:value
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
            series_count:'',
            copydata:[],
            sel:'',
            needPage:'',
            show:false,
        };
    },
    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;

        console.log(pager)
        this.setState({
            pagination: pager,
            needPage:pagination.current,
        });
        if(sorter.order=='descend'){
            sorter.order='desc'
        }
        else if(sorter.order=='ascend'){
            sorter.order='asc'
        }
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
                url: 'http://qzzg.w2.youfen8.com/api/product',
                method: 'get',
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
            data:data.data,
            series_count:data.series_count,
            product_count:data.product_count,
            pagination,
        });
    });
    },
    componentDidMount() {
        this.fetch();
        reqwest({
            url: 'http://qzzg.w2.youfen8.com/api/allseries/',
            method: 'get',
            type: 'json',
        }).then((data) => {
        this.setState({
            copydata:data.data,
        });
        });
    },

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const self = this;
        const {getFieldDecorator}=this.props.form;
        /*列表的列数据*/
        const columns = [{
            key: 1,
            title: 'id',
            dataIndex: 'id',
            width: '5%',
        }, {
            key: 2,
            title: '系列',
            dataIndex: 'series.name',
            width: '10%',
        }, {
            key: 3,
            title: '型号',
            dataIndex: 'name',
            width: '10%',
        }, {
            key: 4,
            title: '说明书名称',
            dataIndex:'pdf.name',
            width: '15%',
        },  {
            key: 6,
            title: '说明书地址',
            dataIndex:'pdf.pdf_url',
            width: '15%',
            render: (url) => <a href={url} target="_blank">查看说明书</a>,
        },{
            key: 7,
            title: '创建时间',
            dataIndex:'created_at',
            width: '15%',
            sorter: true,
        }, {
            key: 8,
            title: '操作',
            width: '18%',
            dataIndex:'id',
            render: (id,record,index) => {
              return (
                <span>
                  <span href="javascript:;" onClick={function(){self.edit(record)}}> <Link to='AddnavInstra/edit'>编辑</Link></span>
                  <span className="ant-divider" />
                  <Popconfirm title="是否删除?" onConfirm={function(){self.del(id,record,index)}} okText="Yes" cancelText="No">
                    <a href="#">删除</a>
                  </Popconfirm>
                </span>
             );
            },
         }];
        return (
            <div>
                <Row>
                  <Form inline>
                    <Col span={3}>
                        <Button type="primary" size="large" style={{ background:'#00cc00',border:'none' }}>
                          <Link to='AddnavInstra/add'>新建</Link>
                        </Button>
                    </Col>
                    <Col span={4}>
                        <FormItem label="系列">
                            {getFieldDecorator('sid')
                            (<Select showSearch style={{ width:180}} placeholder="不限" allowClear
                                optionFilterProp="children" onChange={this.handleChange} notFoundContent="">
                                    {
                                        this.state.copydata.map(
                                            function(e,index){
                                                //const v = e.series?e.series.id.toString():;`${e.id}`渲染成字符串
                                                return <Option key={"indexs"+index} value={`${e.id}`}>{e.name}</Option>
                                            }
                                         )
                                     }
                             </Select>)}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem label="说明书名称">
                            {getFieldDecorator('pdf')
                            (<Input placeholder="如:e50.pdf" style={{ width: 200 }}/>)}
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
                         <span>系列 :{this.state.series_count}</span>
                         <span style={{marginLeft:30}}>型号 : {this.state.product_count} </span>
                    </div>
                    <Table columns={columns}
                        dataSource={this.state.data} pagination={this.state.pagination} loading={this.state.loading}
                        onChange={this.handleTableChange}/>
                 </div>
            </div>
    );
    },
}));

export default Book;
