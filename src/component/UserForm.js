import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputWithLabel from './InputWithLabel';
import Button from './Button';

class UserForm extends Component{

    constructor(props){
 
        super(props);

        this.state = {
            name: '',
            email: '',
            mobileNo: '',
            age:''
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
        this.setState({ mobileNo: value })
    };

    handleOnChangeAge(e) {
        const { value } = e.target;
        this.setState({ age: value })
    };

    handleFormData(e){
        e.preventDefault();
        const { name, email, mobileNo, age } = this.state;
        const user = {
            id: uuidv4(),
            name,
            email,
            mobile: mobileNo,
            age
        }
        this.props.handleAddUserData(user);
        this.setState({ 
            name: '', 
            email: '', 
            mobileNo: '', 
            age: ''
        }) 
    }

    render () {

        const { name, email, mobileNo, age } = this.state;

        const isDisabled = (name && email && mobileNo && age)?false:true;
        console.log('isDisabled',isDisabled);

        return (
            <div>
                <h3>Add New User</h3>
                <form onSubmit={this.handleFormData}  className="mt-4">
                    <InputWithLabel
                        label='Full Name'
                        placeholder='Full Name'
                        value={name}
                        onChange={this.handleOnChangeName}
                    />

                    <InputWithLabel
                        label='Email'
                        placeholder='mail'
                        value={email}
                        onChange={this.handleOnChangeEmail}
                    />

                    <InputWithLabel
                        label='Mobile No'
                        placeholder='Mobile No'
                        value={mobileNo}
                        onChange={this.handleOnChangeMobile}
                    />

                    <InputWithLabel
                        label='Age'
                        placeholder='Age'
                        value={age}
                        onChange={this.handleOnChangeAge}
                    />

                    <Button disabled={isDisabled} type='primary'>Add New User</Button>

                </form>
            </div>
        );
    }

};

export default UserForm;