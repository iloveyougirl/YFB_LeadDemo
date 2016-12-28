import React, { Component } from 'react'
import styles from './rank.css'
import { Link } from 'dva/router';
import {Flex,FlexItem} from 'react-weui';
import { Cells,CellsTitle,Cell,CellHeader, CellBody,CellFooter,} from 'react-weui';



export default class AddTodo extends Component {
	handleClick(){
        window.history.back(-1);
    }
    render() {
        return (
        	<div>
	        	<div>
	                <div style={{height:50,borderBottom:"1px solid #CCC",backgroundColor:"white"}}>
	                    <div className="iconfont icon-icon10-copy" style={{float:"left",lineHeight:3.19+"rem",fontSize:18}} onClick={this.handleClick.bind(this)}></div>
	                    <div style={{textAlign:"center",lineHeight:3.19+"rem",fontSize:18}}>积分排行榜</div>
	                </div>
	            </div>
	            <div>
	                <Cells>
		                <Link to="/Usercenter" style={{color:"black"}}>
		                    <Cell>
			                    <CellHeader>
		                    		<i>230</i>
		                        </CellHeader>
		                        <CellBody>
		                            <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} className={styles.a}/>
		                        </CellBody>
		                        <CellFooter>
		                            <div style={{color:"#FF6600"}}>2000分</div>
		                        </CellFooter>
		                    </Cell>
		                </Link>
	                </Cells>
	            </div>
	            <div style={{backgroundColor:"white",marginTop:15}}>
	                <div>
	                    <div className={styles.b}></div>
	                    <div style={{float:"left",lineHeight:3.19+"rem",fontSize:18}} >最新热门</div>
	                    <div className={styles.c}>赚  赚  赚</div>
	                </div>
	                <div>
		                <Flex>
				            <FlexItem>
				                <div style={{textAlign:"center"}}>
				                	<img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} width={100}/>
				                </div>
				            </FlexItem>
				            <FlexItem>
				                 <div style={{textAlign:"center"}}>
				                	<img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} width={100}/>
				                </div>
				            </FlexItem>
				            <FlexItem>
				                <div style={{textAlign:"center"}}>
				                	<img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} width={100}/>
				                </div>
				            </FlexItem>
				        </Flex>
	                </div>
	            </div>
	            <div style={{backgroundColor:"white",marginTop:15}}>
	                <CellsTitle style={{padding:"12px 15px",fontSize:1+"rem"}}>积分达人</CellsTitle>
	            	<Cells>
	                    <Cell>
		                    <CellHeader>
	                    		<i>230</i>
	                        </CellHeader>
	                        <CellBody>
	                            <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} className={styles.a}/>
	                        </CellBody>
	                        <CellFooter>
	                            <div style={{color:"#FF6600"}}>2000分</div>
	                        </CellFooter>
	                    </Cell>
	                     <Cell>
		                    <CellHeader>
	                    		<i>230</i>
	                        </CellHeader>
	                        <CellBody>
	                            <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} className={styles.a}/>
	                        </CellBody>
	                        <CellFooter>
	                            <div style={{color:"#FF6600"}}>2000分</div>
	                        </CellFooter>
	                    </Cell>
	                    <Cell>
		                    <CellHeader>
	                    		<i>230</i>
	                        </CellHeader>
	                        <CellBody>
	                            <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} className={styles.a}/>
	                        </CellBody>
	                        <CellFooter>
	                            <div style={{color:"#FF6600"}}>2000分</div>
	                        </CellFooter>
	                    </Cell>
	                    <Cell>
		                    <CellHeader>
	                    		<i>230</i>
	                        </CellHeader>
	                        <CellBody>
	                            <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} className={styles.a}/>
	                        </CellBody>
	                        <CellFooter>
	                            <div style={{color:"#FF6600"}}>2000分</div>
	                        </CellFooter>
	                    </Cell>
	                </Cells>
	            </div>
                 

        	</div>
           
        );
    }
}
