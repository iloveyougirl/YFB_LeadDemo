import React from 'react';
import reqwest from 'reqwest';
var ReactDOM = require('react-dom');
import {Input,Button} from 'antd';
import styles from './changename.css';
const Name = React.createClass({
    getInitialState:function(){
        return {
            showEdit:false,
            disabled:true,
            showbg:true,
            showborder:true,
        };
    },
    showEdit(){
        this.setState({
            showEdit:!this.state.showEdit,
        });
    },
    /*点击编辑可编辑背景颜色变化*/
    editInput(){
        this.setState({
            disabled:false,
            showbg:false,
        });
        setTimeout( () => {
            ReactDOM.findDOMNode(this.refs.nameInput).focus();
        },10);
    },
    /*点击input失去焦点*/
    blurinp(){
        this.setState({
            disabled:true,
            showbg:true,
        });
    },
    /*点击显示外边框*/
    showborder(){
        this.setState({
            showborder:false,
        });
    },
    hiddenborder(){
        this.setState({
            showborder:true,
        });
        const inpname=ReactDOM.findDOMNode(this.refs.nameInput).value
        this.props.childSendValue(inpname,this.props.id);
        reqwest({
            url: 'http://qzzg.w2.youfen8.com/api/pdf/'+this.props.id,
            method: 'put',
            data:{
                name:inpname,
            },
            type: 'json',
        }).then((data) => {
        });
        console.log(inpname,this.props.id)
    },
    render(){
        return (
            <div onClick={this.showborder} className={this.state.showborder? styles.border1:styles.border2} onBlur={this.hiddenborder} tabIndex={-1}
                 style={{width:'100%',height:120,background:'#F7F7F7',borderRadius:7}}
                 onMouseEnter={this.showEdit} onMouseLeave={this.showEdit}>
              {this.state.showEdit?<Button type="primary" className={styles.editbtn} style={{background:"#23c0fa"}} onClick={this.editInput}>编辑</Button>:null}
              <div style={{paddingTop:8}}>说明书名称:</div>
              <div><input  defaultValue={this.props.name}  className={this.state.showbg? styles.bg1 : styles.bg2}
                     style={{border:"none",textAlign:'center',fontSize:20,color:"#666",overflow:"hidden",width:"100%"}}
                     disabled={this.state.disabled}  onBlur={this.blurinp}  ref="nameInput"/>
              </div>
              <div style={{paddingTop:5}}>创建时间:</div>
              <div><Input value={this.props.time} style={{border:"none",textAlign:'center',fontSize:14,color:"#666"}}
                  disabled /></div>
            </div>
       )
    }
});


export default Name;
