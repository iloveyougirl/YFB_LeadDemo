import React from 'react';
import styles from './changecenter.css'
import { Flex,FlexItem} from 'react-weui';
import Changecontent from './changecontent/index'
import Activity from './activity/index'
class NewsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"商品兑换",id:1},
                {tabName:"优惠活动",id:2},
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
    handleClick(){
        window.history.back(-1);
    }
    render(){
        const _this=this;
        const isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        const isBox2Show=this.state.currentIndex==2 ? 'block' : 'none';

        const tabList= this.state.tabs.map(function(res,index) {
              // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            const tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
            return  <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>}.bind(_this));
        return (
            <div>
                <div style={{height:50,borderBottom:"1px solid #CCC",backgroundColor:"white"}}>
                    <div className="iconfont icon-icon10-copy" style={{float:"left",lineHeight:3.19+"rem",fontSize:18}} onClick={this.handleClick.bind(this)}></div>
                    <div style={{textAlign:"center",lineHeight:3.19+"rem",fontSize:18}}>兑换中心</div>
                </div>

                <div className="listWrap">
                    <ul style={{overflow:"hidden",textAlign:"center",backgroundColor:"white",height:34,width:"100%",zoom: 1}}>
                        {tabList}
                    </ul>
                    <div className="newsList">
                        <div style={{"display":isBox1Show}}>
                            <Changecontent/>
                        </div>
                        <div style={{"display":isBox2Show}}>
                            <Activity/>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}
export default NewsList;