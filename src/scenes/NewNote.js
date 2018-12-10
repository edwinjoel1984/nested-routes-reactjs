import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton/LoaderButton";
import config from "../config";
import "./NewNote.css";


import S3Client from 'aws-s3';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.state = {
      isLoading: null,
      content: "",
      uploadFileSuccess: false
    };
    this.containerToastr=null;
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();
    const configS3 = {
      bucketName: config.s3.BUCKET,
      region: config.s3.REGION,
      dirName: 'photos',
      accessKeyId: config.s3.ACCESS_KEY,
      secretAccessKey: config.s3.SECRET_ACCESS_KEY,
    }
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }
    this.setState({isLoading:true})
    S3Client
    .uploadFile(this.file, configS3)
    .then(data => {
      console.log(data);
      this.setState({isLoading:false})
      toast.info('Image saved successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
    })
    .catch(err => {
      console.error(err);
      this.setState({isLoading:false})
    })

      }

  render() {
    return (
      <div className="NewNote">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Attachment</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}