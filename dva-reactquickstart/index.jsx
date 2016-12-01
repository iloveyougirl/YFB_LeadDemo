import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Table,message,Button,Popconfirm,Input,Form,InputNumber,Modal } from 'antd';

const FormItem = Form.Item;

let SysGroups  = React.createClass({
  getInitialState:function(){
    return({
      loading:true,
      confirmLoading:false,
      visible: false,
      add_edit:'',
    })
  },
  componentDidMount:function(){
    const self = this;
    util.ajax({
      url:_global.url.api + 'group'
    },function(res){
        if(typeof res.errmsg !== 'undefined'){
          message.error(res.errmsg);
          return false;
        }
        self.setState({
          loading : false,
          tableData : res.shop_groups,
        });
    });
  },
  del(id,index) {
    const self = this;
    util.ajax({
      url:_global.url.api + 'group/' +id,
      type:'DELETE'
    },function(res){
        if(typeof res.errmsg !== 'undefined'){
          message.error(res.errmsg);
          return false;
        }
        let tableData = self.state.tableData;
        tableData.splice(parseInt(index),1);
        self.setState({
          tableData:tableData,
        });
        message.success(res.msg || '删除成功');
    });
  },
  edit(id,record){
    this.setState({
      add_edit:'edit',
      index:record.key,
      id:id,
      name:record.name,
      order_count:record['order_count'],
      visible: true,
    });
  },
  add(){
    this.setState({
      add_edit: 'add',
      visible: true,
      name:'',
      order_count:0,
    })
  },
  handleOk() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.saveData(values);
      }
    });
  },
  saveData(data){
    this.setState({
      confirmLoading:true,
    });
    const self = this;
    const add_edit = this.state.add_edit;

    if(add_edit == 'edit'){
      const id = this.state.id;
      util.ajax({
        url:_global.url.api + 'group/' + id,
        type:'PUT',
        data:{
          name:data.name,
          order_count:data.integral
        }
      },function(res){
        if(typeof res.errmsg !== 'undefined'){
          message.error(res.errmsg);
          self.setState({
            confirmLoading:false,
          });
          return false;
        }
        const index = self.state.index;
        let tableData = self.state.tableData;
        tableData[index].name = data.name;
        tableData[index].order_count = data.integral;
        self.setState({
          tableData:tableData,
          visible: false,
          confirmLoading:false,
        });
        message.success(res.msg || '修改成功');
      });
    }

    if(add_edit == 'add'){
      util.ajax({
        url:_global.url.api + 'group',
        type:'POST',
        data:{
          name:data.name,
          order_count:data.integral
        }
      },function(res){
        if(typeof res.errmsg !== 'undefined'){
          message.error(res.errmsg);
          self.setState({
            confirmLoading:false,
          });
          return false;
        } 
        let tableData = self.state.tableData;
        tableData.unshift({
          key: (tableData.length).toString(),
          id: res.member_group.id,
          name: res.member_group.name,
          counts: res.member_group.counts,
          order_count: res.member_group.order_count,
        });
        self.setState({
          tableData:tableData,
          visible: false,
          confirmLoading:false,
        });
        message.success(res.msg || '添加成功');
      });
    }
  },
  handleCancel() {
    this.setState({
      visible: false,
      confirmLoading:false,
    });
  },
  render() {
    const self = this;
    const columns = [{
      key: 1,
      title: '名称',
      dataIndex: 'name',
    }, {
      key: 2,
      title: '订单数',
      dataIndex: 'counts',
      render:(text,record) =><div>{text}</div>
    }, {
      key: 3,
      title: '自动条件',
      dataIndex: 'order_count',
      render:(text,record) =><div>{text===null?'未设置':('订单累计数达到 '+text)}</div>
    }, {
      key: 4,
      title: '操作',
      dataIndex: 'id',
      render: (text,record) => (
        <div>
          <a href="javascript:;" onClick={function(){self.edit(text,record)}}>编辑</a>
          -
          <Popconfirm title="确定要删除吗？" onConfirm={function(){self.del(text,record.key)}}>
            <a href="javascript:;">删除</a>
          </Popconfirm>
        </div>
      )
    }];
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div style={{paddingTop:24,paddingLeft:100}}>
          <Button size="large" type="primary" onClick={this.add}>新建</Button>
        </div>
        <div className="table-wrap-order-all">
          <Table loading = {this.state.loading}
                 columns={columns}
                 dataSource={this.state.tableData}
                 pagination={false}
          />
        </div>
        <Modal title={this.state.add_edit=='edit'?'编辑':'新增'}
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
               confirmLoading={this.state.confirmLoading}
        >
          <Form horizontal>
            {/*label={this.state.add_edit=='edit'?'将 ' + (this.state.name || '') + ' 修改为：':'新添加分组名称：'}*/}
            <FormItem
              {...formItemLayout}
              label='分组名称'
              
            > 
            {getFieldDecorator('name', {
              initialValue: this.state.name,
              rules: [{ required: true, message: '分组名称不能为空' }],
            })(
              <Input placeholder = { this.state.name || ''} />
            )}
            </FormItem>

            {/*label={this.state.add_edit=='edit'?(this.state.order_count===null?'设置累积积分：':('将 ' + this.state.order_count + ' 累积积分修改为：')):'累积积分：'}*/}
            <FormItem
              {...formItemLayout}
              label='累积积分'
            >
            {getFieldDecorator('integral', {
              initialValue: this.state.order_count,
            })(
              <InputNumber />
            )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
});

SysGroups = Form.create()(SysGroups);

export default SysGroups;