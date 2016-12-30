import React from 'react';
import styles from './upload.css';
import { Collapse } from 'antd';
import { Upload, Icon, message } from 'antd';
const Panel = Collapse.Panel;


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    console.log(file)
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}
class Avatar extends React.Component {
    state = {};
    handleChange = (info) => {
        console.log(info);
        if (info.file.status === 'done') {
            if (info.file.response.code==200) {
                message.success(`${info.file.name} 文件上传成功`);
                getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
            }
            else{
                message.error(`${info.file.name} 文件上传失败`);
            }
        }
        else{
            message.error(`${info.file.name} 文件上传失败`);
        }
    }
    render() {
        const imageUrl = this.state.imageUrl;
        return (
            <div className={styles.addnavwrap}>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="更新首页图片" key="1">
                        <Upload className={styles.avatarUploader}  name="file" showUploadList={false}
                            action="api/image"
                            beforeUpload={beforeUpload} onChange={this.handleChange}>
                            {imageUrl ?<img src={imageUrl} role="presentation" className={styles.avatar} /> :
                            <Icon type="plus" className={styles.avatarUploaderTrigger} />}
                        </Upload>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default Avatar;
