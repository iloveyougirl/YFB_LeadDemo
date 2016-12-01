import React from 'react';
import styles from './Uploadimage.css';
import { Button } from 'antd';
import { Link } from 'dva/router';
const Uploadimg= React.createClass({
    render() {
        return (
            <div>
                <Button type="primary" style={{background:"#00cc00", border:'none'}}
                  className={styles.uploadimg}><Link to='Upload'>上传图片</Link></Button>注:更新首页顶部图片
            </div>
    );
    },
});

export default Uploadimg;
