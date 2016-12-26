import React, { Component } from 'react'
import { Link } from 'dva/router';
import styles from "./header.css"
import { Cells,CellsTitle,Cell,CellHeader, CellBody,CellFooter,} from 'react-weui';

//import {LoadMore} from 'react-weui'
// import RecommendGrids from 'recommendgrids'



export default class usercenter extends Component {
    render() {
        return (
            <div>
                <div className={styles.topwrap}>
                    <span className={styles.Avatar}>
                        <img src={require('../../../assets/yay.jpg')}/>                        
                    </span>
                    <div className={styles.name}>昵称</div>
                    <div className="iconfont icon-jiangbei" style={{position:"absolute",right:1.5+"rem",top:3.5+"rem",fontWeight:"bold",fontSize:25}}>铁杆粉</div>
                </div>
                <div style={{backgroundColor:"white",height:58,paddingTop:5}}>
                    <div style={{float:"left",width:"49%",textAlign:"center",borderRight:"1px solid #EEEEEE"}}>
                        <div style={{color:"#999"}}>我的积分(分)</div>
                        <div  style={{color:"#FF6600"}}>1234567</div>
                    </div>
                    <div style={{float:"right",width:"49%",textAlign:"center"}}>
                        <div style={{color:"#999"}}>我的排行</div>
                        <div style={{color:"#FF6600"}}>3</div>
                    </div>
                </div>

                <div>
                    <Cells>
                        <Cell href="javascript:;" access>
                            <CellBody>
                                兑换中心
                            </CellBody>
                            <CellFooter>
                                又有好礼占坑了
                            </CellFooter>
                        </Cell>
                        <Cell access>
                            <CellBody>
                                兑换记录
                            </CellBody>
                            <CellFooter>                             
                            </CellFooter>
                        </Cell>
                    </Cells>

                    <Cells>
                        <Cell href="javascript:;" access>
                            <CellHeader>
                                <div className="iconfont icon-shouhuodizhi" style={{fontSize:1.3+"rem",marginTop:3,marginRight:5}}></div>
                            </CellHeader>
                            <CellBody>
                                收货地址
                            </CellBody>
                            <CellFooter>                             
                            </CellFooter>
                        </Cell>
                        <Link to="Settings">
                            <Cell access style={{borderTop:"1px solid #ECECEC", color:"black"}}>
                                <CellHeader>
                                   <div className="iconfont icon-shezhi" style={{fontSize:1.3+"rem",marginTop:3,marginRight:5}}></div>
                                </CellHeader>
                                <CellBody>                              
                                  设置
                                </CellBody>
                                <CellFooter>                              
                                </CellFooter>
                            </Cell>
                        </Link>
                    </Cells>
                </div>
               
            </div>
        );
    }
}