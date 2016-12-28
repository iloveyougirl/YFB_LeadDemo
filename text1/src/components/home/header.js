import React, { Component } from 'react';
import styles from "./header.css";
import { Link } from 'react-router';
import { Dialog } from 'react-weui';
import {
    Flex,
    FlexItem
} from 'react-weui';

class topHead extends Component {
    componentDidMount() {
        function GetDateStr(AddDayCount) {   
            const dd = new Date();  
            dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期  
            const y = dd.getFullYear();   
            const m = (dd.getMonth()+1);
            const d = dd.getDate()
            //const m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0  
            //const d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0  
            return {a:m+"."+d,b:y+'年'+m+'月'+d+'日'}  
        }  
            const date1=GetDateStr(1).a;
            const date2=GetDateStr(2).a;
            const date3=GetDateStr(3).a;
            const date4=GetDateStr(4).a;
            const date5=GetDateStr(5).a;
            const date6=GetDateStr(6).a;
            const date7=GetDateStr(7).a;
            const today=GetDateStr(0).b;
            console.log(date1)
        this.setState({
            date1:date1,
            date2:date2,
            date3:date3,
            date4:date4,
            date5:date5,
            date6:date6,
            date7:date7,
            today:today,
        })
    }
    constructor(props){
        super(props);
        this.state = {
            sign1:false,
            sign2:false,
            showAuto1: false,
            style1: {
                buttons: [
                    {
                        type: 'default',
                        label:"关闭",
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            },
        };
    }
    hideDialog() {
        this.setState({
            showAuto1: false,
        });
    }
    handleClick(){
        this.setState({
            sign1:true,
            sign2:true,
        })
    }
    render() {
        return (
            <div>
                <div className={styles.topbg}>
                    <Link to="/Usercenter">
                    <div className={styles.Avatar}>
                        <img src={require('../../assets/yay.jpg')}/>
                    </div>
                    </Link>
                    <div>
                        <div className="iconfont icon-jinbi1" style={{position:"absolute",top:73,left:8,color:"white",fontSize:1.5+"rem"}}></div>
                        <div className={styles.scores}>
                            <div style={{color:"white"}}>我的积分</div>
                            <div style={{color:"white"}}>66666666</div>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.sign1?null:<div className={styles.Inputstyle} onClick={this.handleClick.bind(this)}>立即签到</div>
                        }
                        {
                            this.state.sign2?<div style={{color:"white",textAlign:"center"}} className={styles.uptop}>
                            今日已获得<span style={{color:"#FF5500"}}>2</span>积分,
                            明日可获<span style={{color:"#FF5500"}}>3</span>积分
                            </div>:null
                        }
                    </div>
                   
                    <div>
                        <div className="iconfont icon-rili" onClick={ e=> this.setState({ showAuto1: true})} 
                        style={{position:"absolute",top:4.2+"rem",right:1.5+"rem",fontSize:35,color:"white"}}></div>
                    </div>                   
                    <Dialog title={this.state.style1.title} buttons={this.state.style1.buttons} show={this.state.showAuto1}>
                        {this.state.today}
                        <Flex>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                        </Flex>
                        拖累雅阁托,阿西芭蕾咔擦
                    </Dialog>
                    <div style={{position:"relative",top:10+"rem",textAlign:"center"}}>
                        <Flex>
                            <FlexItem>
                                <span className={styles.d}>{this.state.date1}</span>
                                <div className={styles.e}>1</div>
                            </FlexItem>
                            <FlexItem>
                                <span className={styles.d}>{this.state.date2}</span>
                                <div className={styles.e}>2</div>
                            </FlexItem>
                            <FlexItem>
                                <span className={styles.d}>{this.state.date3}</span>
                                <div className={styles.e}>3</div>
                            </FlexItem>
                            <FlexItem>
                                <span className={styles.d}>{this.state.date4}</span>
                                <div className={styles.e}>4</div>
                            </FlexItem>
                            <FlexItem>
                                <span className={styles.d}>{this.state.date5}</span>
                                <div className={styles.e}>5</div>
                            </FlexItem>
                            <FlexItem>
                                <span className={styles.d}>{this.state.date6}</span>
                                <div className={styles.e}>5</div>
                            </FlexItem>
                            <FlexItem>
                                <span className={styles.d}>{this.state.date7}</span> 
                                <div className={styles.e}>5*2</div>
                            </FlexItem>
                        </Flex>                     
                    </div>
                </div>
            </div>  
        );
    }
}

export default topHead