import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import Layouts from './Layouts';
import Header from './Header';
import SearchText from './SearchText';
import UserList from './UserList';
import UserForm from './UserForm';

class App extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            users : [],
            loading : null,
            error: null,
            searchText: ''
        }        

        this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
        this.handleAddUserData = this.handleAddUserData.bind(this);

    }

    

    handleSearchOnChange(e){
        this.setState({ searchText: e.target.value});
    }

    handleAddUserData(user) {
        console.log('user',user);
        this.setState({ users: this.state.users.concat(user) })
    };

    render (){
        const heading = {
            title : "User Management System",
            subTitle : "Filtering User"
        };
        const count = this.state.users.length;
        const searching = this.state.searchText;
        const users = this.state.users;

        //const fillteredUser = users.filter((user)=> user.fname.toLowerCase().indexOf(searching.toLowerCase())>-1) 
        //console.log(filltered);
        const fillteredUser = users;
        return (
            <div>
                
                <Layouts size='6'>
                    <Header {...heading} />

                    <SearchText 
                        value={searching}
                        handleOnChange={this.handleSearchOnChange}
                    />
                    <UserForm handleAddUserData={this.handleAddUserData}/>
                    <UserList users={fillteredUser}/>
                </Layouts>


            </div>
        )
    }
}

export default App;
