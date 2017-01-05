import React from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { Spin} from 'antd';
const App = React.createClass({
    getInitialState() {
        return {
            data:[],
            loading: false,
            page:1,
        };
    },
    componentWillMount() {
        this.setState({ loading:true});
        axios.get("http://op.redirect.w2.youfen8.com/api/detail",{
            params:{
            }
        })
        .then((data) =>{
            console.log(data)
            this.setState({
                data:data.data.data,
                loading:false,
            });
        })  
    },
    componentDidMount() {
        document.addEventListener("scroll",this.handleScroll);
    },
    componentWillUnmount() {
        document.removeEventListener("scroll",this.handleScroll);
    },
    adddata(data) {
        console.log(data)
        this.setState({
            data:this.state.data.concat(data.data.data)
        })
    },
    handleScroll(){
        //真实内容的高度
        const pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
        //视窗的高度
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
        //隐藏的高度
        const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        //console.log(pageHeight,viewportHeight,scrollHeight)
        const h=pageHeight - viewportHeight - scrollHeight 
        console.log(h)
        if(h <=70 ){    //如果满足触发条件，执行
            document.removeEventListener("scroll",this.handleScroll);
            this.setState({
                loading:true,
                page:this.state.page+1,
            });
            setTimeout( () => {
                axios.get("http://op.redirect.w2.youfen8.com/api/detail",{
                    params:{
                        page:this.state.page
                    }
                })
                .then((data) =>{
                    this.setState({
                        loading:false,
                    });
                    this.adddata(data)
                }) 
                document.addEventListener("scroll",this.handleScroll);
            },500);
        }
    },
    render() {
        const loading =this.state.loading
        const data = this.state.data.map((data,index)=>(
                <div key={index}>
                    <div>
                        {data.id}
                    </div>
                    <div>
                        {data.ip}
                    </div>
                    <div>
                        {data.pid}
                    </div>
                    <div>
                        {data.created_at}
                    </div>
               </div>
            )
        )
        return (
            <div> 
                <Spin spinning={loading} delay={500}>{data}</Spin>     
            </div>
            
        );
    },
});


export default App;