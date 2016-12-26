import React, { Component } from 'react'
import styles from './hot.css'





export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className={styles.hotwrap}>
                        <span className={styles.hot}>hot</span><span style={{color:"black"}}>精选推荐</span>
                    </div>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.flexdemo2}>
	                <div className={styles.imgwrap}>
	                    <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'}/>
	                    <div>中国电信流量包</div>
	                    <div><i className="iconfont icon-jinbi" style={{fontSize:18,color:"darkorange"}}>39积分</i></div>
	                </div>
	                 <div className={styles.imgwrap}>
	                    <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'}/>
	                    <div>中国电信流量包</div>
	                    <div><i className="iconfont icon-jinbi" style={{fontSize:18,color:"darkorange"}}>39积分</i></div>
	                </div>
	                 <div className={styles.imgwrap}>
	                    <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'}/>
	                    <div>中国电信流量包</div>
	                    <div><i className="iconfont icon-jinbi" style={{fontSize:18,color:"darkorange"}}>39积分</i></div>
	                </div>
                </div>
                
            </div>
        );
    }
}