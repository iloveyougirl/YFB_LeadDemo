import React from 'react';
import reqwest from 'reqwest';
import { Upload, message, Input,Form,Modal,Button,Row,Col,Collapse,Select,notification, Icon } from 'antd';
import FreeScrollBar from 'react-free-scrollbar';
import Name from './changename/changename';
import styles from './AddnavInstra.css';

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;

//const props = {
//    name: 'file',
//    action: 'http://qzzg.w2.youfen8.com/api/pdf',
//    headers: {
//        authorization: 'authorization-text',
//    },
//    onChange(info) {
//         console.log(info)
//        if (info.file.status !== 'uploading') {
//            console.log(info.file, info.fileList);
//        }
//        if (info.file.status === 'done') {
//            if(info.file.response.code==200){
//                let tableData = this.state.data;
//                tableData.unshift(parseInt(index),1);
//                this.setState({
//                    data:tableData,
//                });
//                this.setState({
//
//                });
//            }
//            message.success(`${info.file.name} 文件上传成功`);
//        } else if (info.file.status === 'error') {
//            message.error(`${info.file.name} 文件上传失败`);
//        }
//    },
//};

const AddnavInstra = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.pdfValue==''){
            this.setState({
                showWarn:true,
            });
            return false;
        }
        else{
            this.setState({
                showWarn:false,
            });
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    // console.log('Received values of form: ', values);
                    if(this.props.params.name=="add"){
                        if(this.state.pid==''){
                            return false;
                        }
                        reqwest({
                            url: 'http://qzzg.w2.youfen8.com/api/product/',
                            data:{
                                name:values.name,
                                sid:values.sid,
                                pid:this.state.pid,
                            },
                            method: 'POST',
                            type: 'json',
                        }).then((data) => {
                            if( data.code == 200){
                                notification.open({
                                    message:'温馨提示：',
                                    description: '该项已保存成功',
                                    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
                                });
                            }
                            else{
                                message.error(data.errmsg);
                                return false;
                            }
                        });
                    }
                    else if(this.props.params.name=="edit"){
                        if(this.state.pid==''){
                            if(this.state.listName=='values.name'){
                                reqwest({
                                    url: 'http://qzzg.w2.youfen8.com/api/product/'+sessionStorage.getItem("id"),
                                    method: 'put',
                                    data:{
                                        name:this.state.sssid,
                                        sid:values.sid,
                                        pid:this.state.pdfid,
                                    },
                                    type: 'json',
                                }).then((data) => {
                                    if( data.code == 200){
                                        message.success(data.msg || '保存成功');
                                    }
                                    else{
                                        message.error(data.errmsg);
                                        return false;
                                    }
                                });
                             }
                            else{
                                reqwest({
                                    url: 'http://qzzg.w2.youfen8.com/api/product/'+sessionStorage.getItem("id"),
                                    method: 'put',
                                    data:{
                                        name:values.name,
                                        sid:values.sid,
                                        pid:this.state.pdfid,
                                    },
                                    type: 'json',
                                }).then((data) => {
                                    if( data.code == 200){
                                        message.success(data.msg || '保存成功');
                                    }
                                    else{
                                        message.error(data.errmsg);
                                        return false;
                                    }
                                });
                            }
                        }
                            else{
                                if(this.state.listName=='values.name'){
                                    reqwest({
                                        url: 'http://qzzg.w2.youfen8.com/api/product/'+sessionStorage.getItem("id"),
                                        method: 'put',
                                        data:{
                                            name:this.state.sssid,
                                            sid:values.sid,
                                            pid:this.state.pid,
                                        },
                                        type: 'json',
                                    }).then((data) => {
                                        // console.log(data)
                                        if( data.code == 200){
                                            message.success(data.msg || '保存成功');
                                        }
                                        else{
                                            message.error(data.errmsg);
                                            return false;
                                        }
                                    });
                                }
                                else{
                                    reqwest({
                                        url: 'http://qzzg.w2.youfen8.com/api/product/'+sessionStorage.getItem("id"),
                                        method: 'put',
                                        data:{
                                            name:values.name,
                                            sid:values.sid,
                                            pid:this.state.pid,
                                        },
                                        type: 'json',
                                    }).then((data) => {
                                       // console.log(data)
                                        if( data.code == 200){
                                            message.success(data.msg || '保存成功');
                                        }
                                        else{
                                            message.error(data.errmsg);
                                            return false;
                                        }
                                    });
                                }
                            }
                        }
                    }
                });
            }
    },
    /*模态框的一系列操作*/
    getInitialState:function(){
        return {
            visible: false,
            value:'',
            data:[],
            disabled:true,
            showEdit:false,
            pdfValue:'',
            showWarn:false,
            copydata:[],
            pid:'',
            pdfid:'',
            checkValue: sessionStorage.getItem("id") || false,
        };
    },
    /*点击显示模态框*/
    showModal() {
        reqwest({
            url: 'http://qzzg.w2.youfen8.com/api/pdf',
            method: 'GET',
            type: 'json',
        }).then((data) => {
            // console.log(data)
            this.setState({
                data:data,
            });
           // console.log(data.data)
        });
        this.setState({
            visible: true,
        });
    },
    handleOk() {
        // console.log('Clicked OK');
        if(this.state.pdfValue!==''){
            this.setState({
                visible: false,
            });
        }
        else{
            // message.info('请选择文件');
            // const pdfData = this.state.data;
            // pdfData.unshift({
            //     id:88,
            //     name: 'nihao',
            //     created_at:"2016-12-18 20:11:38",
            //     pdf_url:"http://1.s.pros.weiniudiandian.com/qzzg/pdf/bnlkYlipVCGezGNf.pdf",
            // });
            // this.setState({
            //     data:pdfData,
            // });
        }
    },
    handleCancel(e) {
        this.setState({
            visible: false,
        });
    },
    /*从子组件中得到的数据*/
    getValue(e,id){
        // console.log(e,id)
        this.setState({
            pdfValue:e,
            pid:id,
        });
    },
    handleChange(value) {
      // console.log(`selected ${value}`);
    },
    componentDidMount() {
        if(this.props.params.name=="add"){
            reqwest({
                url: 'http://qzzg.w2.youfen8.com/api/allseries/',
                method: 'get',
                type: 'json',
            }).then((data) => {
                this.setState({
                copydata:data.data,
                });
            });
        }
        else if(this.props.params.name=="edit"){
            reqwest({
                url: 'http://qzzg.w2.youfen8.com/api/product/'+sessionStorage.getItem("id")+'/edit',
                method: 'get',
                type: 'json',
            }).then((data) => {
                // console.log(data)
                this.setState({
                    pdfValue:data[0].pdf.name,
                    modelValue:data[0].name,
                    listName:data[0].series.name,
                    pdfid:data[0].pdf.id,
                    sssid:data[0].series.id,
                });
                this.props.form.setFieldsValue({sid:`${data[0].series.id}`});
            });
            reqwest({
                url: 'http://qzzg.w2.youfen8.com/api/allseries/',
                method: 'get',
                type: 'json',
            }).then((data) => {
                this.setState({
                    copydata:data.data,
                });
            });
        }
    },
    render() {
        const self = this;
        const { getFieldDecorator } = this.props.form;
        const props = {
            name: 'file',
            action: 'api/pdf',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file,info.fileList);
                }
                if (info.file.status === 'done') {
                    if (info.file.response.errcode == 401) {
                        message.error(`${info.file.name} 文件上传失败`);
                    }
                    else{
                        const pdfData = self.state.data;
                        pdfData.unshift({
                            id:info.file.response.id,
                            name: info.file.response.name,
                            created_at:info.file.response.created_at,
                            pdf_url:info.file.response.pdf_url,
                        });
                        self.setState({
                            data:pdfData,
                        });
                        setTimeout( () => {
                            window.location.reload();
                            //     //setTimeout('myrefresh()',1000); //指定1秒刷新一次
                        },1500);
                            message.success(`${info.file.name} 文件上传成功`);
                    }
                }
                else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 文件上传失败`);
                }
            },
        };
        return (
            <div className={styles.addnavwrap}>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="新建导航仪系列" key="1">
                        <Row>
                            <Form inline>
                                <Col span={24} style={{marginLeft:'25%'}}>
                                    <FormItem label="选择系列">
                                        {getFieldDecorator('sid', {
                                            rules:[{
                                                required: true,
                                                message:'请选择系列'
                                            }],
                                        })
                                        (<Select showSearch style={{ width:300}} placeholder="请选择系列" optionFilterProp="children" onChange={this.handleChange} 
                                            notFoundContent="">
                                            {this.state.copydata.map(
                                                function(e,index){
                                                    return (<Option key={"indexss"+index} value={`${e.id}`}>{e.name}</Option>)
                                                }
                                            )}
                                        </Select>)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={24} className={styles.listcolorwrap} style={{marginLeft:'25%'}}>
                                    <FormItem label="型号" hasFeedback>
                                        {getFieldDecorator('name', {initialValue:this.state.modelValue,rules:[{required: true, message:'系列型号不能为空'}],})
                                        (<Input placeholder="请选择型号名称" style={{width:300}} />)}
                                    </FormItem>
                                </Col>
                                <Col span={24} style={{marginLeft:'24.3%'}}>
                                    <span><i className={styles.listcolor}>*</i>选择说明书 : </span>
                                    <Button type="primary" onClick={this.showModal} style={{background:'#00cc00',border:'none',marginLeft:5}}>
                                        选择说明书
                                    </Button>
                                    <span style={{fontSize:15,color:'#FF8800',marginLeft:20}}>已选择 :{this.state.pdfValue}</span>
                                </Col>
                               {this.state.showWarn?<div style={{marginLeft:'32.5%',color:'#FF5500'}}>请选择说明书</div>:null}
                                <Col span={24} style={{marginLeft:'37%'}}>
                                    <Button type="primary" size="large"
                                        style={{width:150,marginTop:30,background:"#23c0fa",border:'none'}} onClick={this.handleSubmit}>确认保存</Button>
                                </Col>
                            </Form>
                        </Row>
                    </Panel>
                </Collapse>
                <Modal visible={this.state.visible} title="选择说明书" onCancel={this.handleCancel} width={940}
                  footer={[<Button key="back" type="ghost" size="large" onClick={this.handleCancel}>取消</Button>,
                  <Button key="submit" type="primary" size="large" onClick={this.handleOk}>确定</Button>,]}>
                      <Row>
                          <div style={{height:'450px'}}>
                              <FreeScrollBar>
                                  <Col span={18}/>
                                  <Col span={6}>
                                    <Upload {...props}>
                                      <Button type="primary" style={{background:'#00cc00', border:'none',marginLeft:5,width:120,height:30}}>本地上传</Button>
                                    </Upload>
                                  </Col>
                                    {self.state.data.map(
                                        function(e,index){
                                            return (
                                                <Col span={4} style={{marginLeft:24,marginTop:20}} key={'index'+index}>
                                                    <Name namevalue={e.name} id={e.id} time={e.created_at} childSendValue={self.getValue}/>
                                                </Col>
                                            )
                                        }
                                    )}
                              </FreeScrollBar>
                          </div>
                      </Row>
                </Modal>
            </div>
    );
    },
}));

export default AddnavInstra;
