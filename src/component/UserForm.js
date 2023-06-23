import React, {Component} from 'react';

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
    }

    render () {

        const { name, email, mobileNo, age } = this.state;

        return (
            <div>
                <h3>Add New User</h3>
                <form>
                    <InputWithLabel
                        label='Full Name'
                        placeholder='Full Name'
                        value={name}
                    />

                    <InputWithLabel
                        label='email'
                        placeholder='email'
                        value={email}
                    />

                    <InputWithLabel
                        label='mobile no'
                        placeholder='mobile no'
                        value={mobileNo}
                    />

                    <InputWithLabel
                        label='age'
                        placeholder='age'
                        value={age}
                    />

                    <Button type='primary'>Add New User</Button>

                </form>
            </div>
        );
    }

};

export default UserForm;