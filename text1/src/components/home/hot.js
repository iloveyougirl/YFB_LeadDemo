import React, { Component } from 'react'
import styles from './hot.css'





export default class AddTodo extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"商品兑换",id:1},
                {tabName:"免费领取",id:2},
                {tabName:"赚积分",id:3},
                {tabName:"其他",id:4},
            ],
            currentIndex:1,
        };
    }    
    componentDidMount() {
        
    }
    tabChoiced=(id)=>{
        //tab切换到方法
        this.setState({
            currentIndex:id
        });
       
    }
    render() {
    	const _this=this;
        const isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        const isBox2Show=this.state.currentIndex==2 ? 'block' : 'none';
        const isBox3Show=this.state.currentIndex==3 ? 'block' : 'none';
        const isBox4Show=this.state.currentIndex==4 ? 'block' : 'none';

        const tabList= this.state.tabs.map(function(res,index) {
              // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            const tabStyle=res.id==this.state.currentIndex ? 'Ctrl Ctrlactive' : 'Ctrl';
            return  <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>}.bind(_this));
        return (
            <div>
                <div>
                    <div className={styles.hotwrap}>
                        <span className={styles.hot}>hot</span><span style={{color:"black"}}>精选推荐</span>
                    </div>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.flexdemo2}>
	                <div className="listWrap">
	                    <ul style={{overflow:"hidden",textAlign:"center",backgroundColor:"white",height:34,width:"100%",zoom: 1}}>
	                        {tabList}
	                    </ul>
	                    <div className="newsList">
	                        <div style={{"display":isBox1Show}}>    
	                        </div>
	                        <div style={{"display":isBox2Show}}>
	                        </div>
	                        <div style={{"display":isBox3Show}}>
	                        </div>
	                        <div style={{"display":isBox4Show}}>
	                        </div>
	                    </div>
	                </div>            
                </div>    
            </div>
        );
    }
}