import React, { Component } from 'react';
import './styles.css'
import axios from 'axios';

class ContactUs extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            subject : '',
        }
    }


    onSubmitHandler = e => {
        

        axios({
            method: 'post',
            url: 'https://gihan-server.azurewebsites.net/api/portfolio/sendMail',
            data : this.state
        }).then(res => {

            alert('Email sent successfully');
            this.setState({
                name: '',
                email: '',
                message: ''
            });
           
        }).catch(err => {
            console.log(err);

        })

        
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div className="contact">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="small-box contact-form">
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="name">Name:</label>
                                    <div className="col-sm-10">
                                        <input
                                            value={this.state.name}
                                            onChange={this.onChangeHandler}
                                            type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Email:</label>
                                    <div className="col-sm-10">
                                        <input
                                            value={this.state.email}
                                            onChange={this.onChangeHandler}
                                            type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="subject">Subject:</label>
                                    <div className="col-sm-10">
                                        <input
                                            value={this.state.subject}
                                            onChange={this.onChangeHandler}
                                            type="text" className="form-control" id="subject" placeholder="Enter Subject" name="subject" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="comment">Comment:</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            value={this.state.message}
                                            onChange={this.onChangeHandler}
                                            className=" form-control form-control-area" rows={5} name="message" id="comment" placeholder="Enter Message" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-default submit-btn" onClick={this.onSubmitHandler}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;