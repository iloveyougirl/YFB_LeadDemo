import React, { Component } from 'react'
import styles from "./recharge.css"
var ReactDOM = require('react-dom');
import { Cells,CellsTitle,Cell,CellHeader, CellBody,CellFooter,} from 'react-weui';




export default class AddTodo extends Component {
	constructor(props) {
        super(props);
        this.state = {
           val:"",
        };
    }    
    componentDidMount() {
        
    }
	handleClick(){
        window.history.back(-1);
    }
    // handleChange = (e) => {
    //     this.setState({val:e.target.value});
    //     console.log(this.state.val)
    // }
    handleChange(e){
    	this.setState({
    		val:e.target.value
    	})
        const num= ReactDOM.findDOMNode(this.refs.numInput).value
        console.log(this.state.val,num)
    }
    render() {
        return (
            <div>
                <div style={{height:50,borderBottom:"1px solid #CCC",backgroundColor:"white"}}>
                    <div className="iconfont icon-icon10-copy" style={{float:"left",lineHeight:3.19+"rem",fontSize:18}} onClick={this.handleClick.bind(this)}></div>
                    <div style={{textAlign:"center",lineHeight:3.19+"rem",fontSize:18}}>充值</div>
                </div>
                <div className={styles.topwrap}>
               		<input type="text"  placeholder="请输入正确手机号" ref="numInput" onChange={this.handleChange.bind(this)} value={this.state.val} className={styles.inputcontent}/>
               		<div className={styles.a}>浙江移动</div>
                </div> 
                <div className={styles.b}>全国流量包  立即生效  月底失效</div>  
                <div>
                    <Cells>
                        <Cell>
                            <CellBody>
                                10M
                            </CellBody>
                            <CellFooter>
                                <div className={styles.c}>20积分</div>
                            </CellFooter>
                        </Cell>
                        <Cell>
                            <CellBody>
                                20M
                            </CellBody>
                            <CellFooter>   
                                <div className={styles.c}>20积分</div>                     
                            </CellFooter>
                        </Cell>
                    </Cells>
                </div>
                <div className={styles.d}>
	                <div>有人@你，积分兑换</div>
	                <div>移动：10次/月  联通：5次/月   电信：无限次</div>
                </div>
            </div>


        );
    }
}