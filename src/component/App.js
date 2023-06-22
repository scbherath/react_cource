import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Layouts from './Layouts';
import Header from './Header';
import SearchText from './SearchText';
import UserList from './UserList';


import axios from 'axios';

class App extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            users : [],
            loading : null,
            error: null
        }

        this.loadAllUsers = this.loadAllUsers.bind(this);

        this.url = 'https://www.melivecode.com/api/users';

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



    render (){
        const heading = {
            title : "User Management System",
            subTitle : "Filtering User"
        };
        const count = this.state.users.length;
        
        return (
            <div>
                {this.state.loading && <div>Loading</div>}
                {count}
                <Layouts>
                    <Header {...heading} />
                    <SearchText/>
                    <UserList users={this.state.users}/>

                </Layouts>


            </div>
        )
    }
}

export default App;
