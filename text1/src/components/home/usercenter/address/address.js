import React, { Component } from 'react'
import { Cells,CellsTitle,Cell,CellHeader, CellBody,CellFooter,Form,FormCell,Label,Input} from 'react-weui';
import { Button, Popup,  PopupHeader, } from 'react-weui';
import Detail from './detail/detail'
import { Link } from 'react-router'
import styles from './address.css'
import ReactDOM from'react-dom';


export default class AddTodo extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	val:"",
        	name:'',
            isshow:true,
            bottom_show: false,
            fullpage_show: false,
        };
    }    
	handleClick(){
        window.history.back(-1);
    }
    handleShow(){
    	this.setState({
            isshow:!this.state.isshow,
    	});
    }
    hide(){
        this.setState({
            bottom_show: false,
            fullpage_show: false,
        })
    }
    handleChange(e){
    	const value=e.target.value
    	this.setState({
    		val:value
    	}) 
        console.log(value)
    }
    render() {
    	 console.log(this.state.val)
        return (
            <div>
                <div style={{height:50,borderBottom:"1px solid #CCC",backgroundColor:"white"}}>
                    <div className="iconfont icon-icon10-copy" style={{float:"left",lineHeight:3.19+"rem",fontSize:18}} onClick={this.handleClick.bind(this)}></div>
                    <div style={{textAlign:"center",lineHeight:3.19+"rem",fontSize:18}}>收货地址</div>
                </div>
                 <div onClick={e=>this.setState({fullpage_show:true})}>
                    <Cells >
                        <Cell access>
	                        <CellHeader>
			                   <div className="iconfont icon-xinzengdizhi"></div>
			                </CellHeader>
                            <CellBody>
                                <div style={{marginLeft:15}}>新增收货地址</div>
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Cells>
                </div>

                <div>
	                <Detail/>	
	                <Detail/>
            	</div>


                <div>
	                <Popup show={this.state.fullpage_show} onRequestClose={e=>this.setState({fullpage_show: false})}>
	                    <div style={{height: '100vh',backgroundColor:"white",overflow:"scroll"}}>
	                        <CellsTitle>
	                            <span style={{color:"black",fontSize:"16px"}}>新增收货地址</span>
	                            <span className="iconfont icon-iconfontclosesmall" 
	                                style={{position:"absolute",right:20}} onClick={e=>this.setState({fullpage_show: false})}></span>
	                        </CellsTitle>
		                    <Form>
				                <FormCell>
				                    <CellHeader>
				                        收货人
				                    </CellHeader>
				                    <CellBody>
				                        <Input type="text" placeholder="请填写收货人姓名"  onChange={this.handleChange.bind(this)} defaultValue={this.state.val}
				                        style={{textIndent:50,fontSize:15,fontFamily:"Microsoft YaHei"}}/>
				                    </CellBody>
				                </FormCell>
				                <FormCell>
				                    <CellHeader>
				                        手机号码
				                    </CellHeader>
				                    <CellBody>
				                        <Input type="text" placeholder="请输入手机号码" style={{textIndent:32,fontSize:15,fontFamily:"Microsoft YaHei"}}/>
				                    </CellBody>
				                </FormCell>
				                <FormCell>
				                    <CellHeader>
				                        地区信息
				                    </CellHeader>
				                    <CellBody>
				                        <Input type="text" placeholder="请输入地区 如：省 市 县" style={{textIndent:32,fontSize:15,fontFamily:"Microsoft YaHei"}}/>
				                    </CellBody>
				                </FormCell>
				                <FormCell>
				                    <CellHeader>
				                        详细信息
				                    </CellHeader>
				                    <CellBody>
				                        <Input type="text" placeholder="请输入街道门牌信息" style={{textIndent:32,fontSize:15,fontFamily:"Microsoft YaHei"}}/>
				                    </CellBody>
				                </FormCell>
				                <FormCell>
				                    <CellHeader>
				                        邮政编码
				                    </CellHeader>
				                    <CellBody>
				                        <Input type="text" placeholder="请输入邮政编码,可不填" style={{textIndent:32,fontSize:15,fontFamily:"Microsoft YaHei"}}/>
				                    </CellBody>
				                </FormCell>
				            </Form>
	                        <Button onClick={e=>this.setState({fullpage_show: false})}>保存</Button>      
	                    </div>
	                </Popup>
                </div>
            </div>
        );
    }
}
