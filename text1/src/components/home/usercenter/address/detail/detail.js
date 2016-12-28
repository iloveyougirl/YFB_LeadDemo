import React, { Component } from 'react'
import { Cells,CellsTitle,Cell,CellHeader, CellBody,CellFooter,} from 'react-weui';
import {
	PanelFooter,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} from 'react-weui';

export default class AddTodo extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isshow:true,
        };
    }    
	handleShow(){
    	this.setState({
            isshow:!this.state.isshow,
    	});
    }
    render() {
        return (
            <div>
	            <PanelBody style={{backgroundColor:"white",marginTop:10}}>
	                <MediaBox type="appmsg" href="javascript:void(0);">  
	                    <MediaBoxBody>
	                        <MediaBoxTitle>
	                            <span style={{fontSize:0.96+"rem"}}>张子慧</span><span style={{display:"block",float:"right",fontSize:0.96+"rem"}}>110114112119</span>
	                        </MediaBoxTitle>
	                        <MediaBoxDescription> 
	                            <span style={{fontSize:15}}>浙江省  杭州市  拱墅区   紫荆花路129号望月公寓</span>          
	                        </MediaBoxDescription>
	                    </MediaBoxBody>
	                </MediaBox>
	            </PanelBody>
	            <PanelFooter>
	                <div style={{backgroundColor:"white",borderTop:"1px solid #EEE"}}>
		                <Cell>
						    <CellBody>
						        {this.state.isshow?
						        	<span className='iconfont icon-moren' onClick={this.handleShow.bind(this)} 
						        	   style={{fontSize:12,color:"#999999",fontWeight:"bold"}}>设为默认</span>:null}
						        {this.state.isshow?null:<span className='iconfont icon-shezhimorendizhixuanzhong01' 
						            onClick={this.handleShow.bind(this)} style={{fontSize:13,color:"#FE5400",fontWeight:"bold"}}>
						                <span style={{fontSize:12}}>默认地址</span></span>}
						    </CellBody>
						    <CellFooter>
				                <span className='iconfont icon-bianji' style={{fontSize:13,marginRight:15,fontWeight:"bold"}}>编辑</span>
				                <span className='iconfont icon-delete'  style={{fontSize:13,fontWeight:"bold"}}>删除</span>
					        </CellFooter>
					    </Cell>            
	                </div>         
	            </PanelFooter>
            </div>
        );
    }
}