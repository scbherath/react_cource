import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import User from './User';
import TextInput from './TextInput';

class UserApp extends Component{

    constructor(props){
        super(props);

        this.state = {
            users : [
                {
                    id: 1,
                    name: "herath",
                    email: "herath@mail.com",
                    age: 10,                                
                },
                {
                    id: 2,
                    name: "herath2",
                    email: "herath2@mail.com",
                    age: 20,                                
                },
                {
                    id: 3,
                    name: "herath3",
                    email: "herath3@mail.com",
                    age: 30,                                
                },
                {
                    id: 4,
                    name: "herath4",
                    email: "herath4@mail.com",
                    age: 40,                                
                },
                {
                    id: 5,
                    name: "herath5",
                    email: "herath5@mail.com",
                    age: 20,                                
                }
            ],
            search : null
        }

        this.handleSearch = this.handleSearch.bind(this);

    }

    componentDidMount(){
        
    }

    componentDidUpdate(prevState, prevProps)
    {
        if (prevProps.search !== this.props.search) { 
            //console.log('componentDidUpdate changes ',this.props.search);
            this.setState (()=> ({
                search: this.props.search
            }));
        }         
    }

    handleSearch = () => { 
        const {search} = this.state;
        //if(event.target.value && event.target.value !== null){
            //console.log(event.target.value);
            //console.log('--------------------kkk');
            //this.setState (()=> ({
                //search: event.target.value
           // }));
       // }            
        
        //console.log(event.target.value);
        
        //const { search } = this.state;    
        //console.log('this.state ',this.state);

    };

    render (){
        const {users} = this.state;
        //console.log('users ',users);
        return (
            <div>
                <div className='container'>                   
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='text-center'>
                                <h1>User List</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>                     
                    <div className='col-md-4'>
                        <TextInput label="Search" placeHolder="Type Search Text Here" onChange={this.handleSearch}/>
                    </div> 
                </div>

                <div className='row'>       
                    <div className='col-md-2'>
                        Name
                    </div>  
                    <div className='col-md-2'>
                        EMail
                    </div>
                    <div className='col-md-2'>
                        Age
                    </div>
                </div>
                {
                    users.map((user) => (                    
                        <div key={user.id} className='row'> 
                            <User key={user.id} {...user} />
                        </div>
                    )

                )}
            </div>
        )
    };
}

export default UserApp;