import React from "react";
import PropTypes from "prop-types";
import Upload from 'antd/lib/upload';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Icon from 'antd/lib/upload';

var props = {
  name: 'img',
  action: '/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      document.querySelector('#preview-img').src = info.file.response.image_url;
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default class UploadImage extends React.Component {
  render () {
    return (
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
        <img id ="preview-img" src=""/>
      </Upload>
    );
  }
}
 
