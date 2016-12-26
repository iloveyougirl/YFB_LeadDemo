import React, { Component } from 'react';
import styles from "./header.css";
import { Link } from 'react-router';
import { Dialog } from 'react-weui';

class topHead extends Component {
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
                        拖累雅阁托,阿西芭蕾咔擦
                        </Dialog>
                </div>
            </div>  
        );
    }
}

export default topHead