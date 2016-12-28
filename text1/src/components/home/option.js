import React, { Component } from 'react';
import { Link } from 'dva/router';
import styles from "./option.css";
import ReactDOM from 'react-dom';
import {Flex,FlexItem} from 'react-weui';
import {Button, ButtonArea} from 'react-weui';

class Options extends Component {
    render() {
        return (
            <div className={styles.someicon}>
                <Flex>
                   
			            <FlexItem>
				            <Link to="/Usercenter" style={{color:"black"}}>
				                <div className={styles.someiconstyle}>
		                            <div className="iconfont icon-wo" style={{fontSize:35,color:"#FC8C47"}}></div>
		                        </div>
		                        <div className={styles.flexdemo}>我的</div>
		                    </Link>   
			            </FlexItem>
		           		         
		            <FlexItem>
			            <Link to="/Rank" style={{color:"black"}}>
			                <div className={styles.someiconstyle}>
	                            <div className="iconfont icon-duihuanzhongxin" style={{fontSize:35,color:"#37A3EE"}}></div>
	                        </div>
	                        <div className={styles.flexdemo}>积分排行</div>
	                    </Link>
		            </FlexItem>
		            		          
			        <FlexItem>
			            <Link to="/Changecenter" style={{color:"black"}}>
			                <div className={styles.someiconstyle}>
	                            <div className="iconfont icon-duihuan" style={{fontSize:35,color:"#FCB643"}}></div>
	                        </div>
	                        <div className={styles.flexdemo}>兑换中心</div>
	                    </Link>   
			        </FlexItem>
		            		           
		            <FlexItem>
			            <Link to="/Recharge" style={{color:"black"}}>
			                <div className={styles.someiconstyle}>
	                            <div className="iconfont icon-jifenpaiming" style={{fontSize:35,color:"#6BC526"}}></div>
	                        </div>
	                        <div className={styles.flexdemo}>流量兑换</div>
	                    </Link>	
		            </FlexItem>			           	            
                </Flex>
                <div className={styles.containerbox}>
		            <div style={{float:"left",marginRight:11}} >
		                <div className="iconfont icon-toutiao" style={{fontSize:30,lineHeight:2+"rem",color:"darkorange"}}></div>
		            </div>
		            <div className={styles.libox}>
		                <ul>
		                    <li>飞鲨勇士张超：曾驾歼-8战机</li>
		                    <li>台媒炒作大陆军机飞临台</li>
		                    <li>菲总统对华为何晴转阴</li>
		                    <li>外媒称韩国醉心中等强国地位 </li>
		                    <li>伊朗官方回应日本驻伊大使被</li>
		                    <li>飞鲨勇士张超：曾驾歼-8战机</li>
		                </ul>
		            </div>
		        </div>
            </div>  
        );
    }
}

export default Options 