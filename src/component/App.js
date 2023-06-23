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

        this.loadAllUsers = this.loadAllUsers.bind(this);

        this.url = 'https://www.melivecode.com/api/users';

        this.handleSearchOnChange = this.handleSearchOnChange.bind(this);


    }

    componentDidMount(){
        this.loadAllUsers();
    }

    loadAllUsers(){
        this.setState({loading:true});
        axios.get(this.url)
        .then(res => {
            this.setState({users:res.data});
            //console.log(res.data);
            this.setState({loading:false});
        });
        
    }

    handleSearchOnChange(e){
        this.setState({ searchText: e.target.value});
    }

    render (){
        const heading = {
            title : "User Management System",
            subTitle : "Filtering User"
        };
        const count = this.state.users.length;
        const searching = this.state.searchText;
        console.log('searchText',searching);
        const users = this.state.users;

        const fillteredUser = users.filter((user)=> user.fname.toLowerCase().indexOf(searching.toLowerCase())>-1) 
        //console.log(filltered);

        return (
            <div>
                {this.state.loading && <div>Loading</div>}
                {count}
                <Layouts>
                    <Header {...heading} />

                    <SearchText 
                        value={searching}
                        handleOnChange={this.handleSearchOnChange}
                    />
                    <UserForm />
                    <UserList users={fillteredUser}/>

                </Layouts>


            </div>
        )
    }
}

export default App;
