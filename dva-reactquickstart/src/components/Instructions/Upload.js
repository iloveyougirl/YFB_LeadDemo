import React from 'react';
import { Table } from 'antd';




const Upload= React.createClass({
    render() {
        return (
            <Table columns={columns} dataSource={data} bordered />
        );
    },
});

export default Upload;
