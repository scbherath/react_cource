import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputWidthLabel from './InputWithLabel';
import Buttons from './Buttons';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            mobileNumber: '',
            age: ''
        }
        this.handleOnChangeName = this.handleOnChangeName.bind(this);
        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
        this.handleOnChangeMobile = this.handleOnChangeMobile.bind(this);
        this.handleOnChangeAge = this.handleOnChangeAge.bind(this);
        this.handleFormData = this.handleFormData.bind(this);
    }

    handleOnChangeName(e) {
        const { value } = e.target;
        this.setState({ name: value })
    };

    handleOnChangeEmail(e) {
        const { value } = e.target;
        this.setState({ email: value })
    };

    handleOnChangeMobile(e) {
        const { value } = e.target;
        this.setState({ mobileNumber: value })
    };

    handleOnChangeAge(e) {
        const { value } = e.target;
        this.setState({ age: value })
    };

    handleFormData(e) {
        e.preventDefault();
        const { name, email, mobileNumber, age } = this.state;
        const user = {
            id: uuidv4(),
            name,
            email,
            mobile: mobileNumber,
            age

        }
        this.props.handleAddUserData(user);
        this.setState({ name: '' })
        this.setState({ email: '' })
        this.setState({ mobileNumber: '' })
        this.setState({ age: '' })
    };

    render() {
        const { name, email, mobileNumber, age } = this.state;
        return (
            <div>
                <h2>Add New User</h2>
                <form onSubmit={this.handleFormData} className="mt-4">
                    <InputWidthLabel
                        label="Full Name"
                        value={name}
                        onChange={this.handleOnChangeName}
                    />
                    <InputWidthLabel
                        label="Email Address"
                        value={email}
                        onChange={this.handleOnChangeEmail}
                    />
                    <InputWidthLabel
                        label="Mobile Number"
                        value={mobileNumber}
                        onChange={this.handleOnChangeMobile}
                    />
                    <InputWidthLabel
                        label="Age"
                        value={age}
                        onChange={this.handleOnChangeAge}
                    />
                    <Buttons type="primary">Add User</Buttons>
                </form>
            </div>
        )
    }
};

export default UserForm;