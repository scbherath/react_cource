import React, { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';

// Components
import Layouts from './Layouts';
import Header from './Header';
import SearchBar from './SearchBar';
import UserList from './UserList';
import UserForm from './UserForm';
//import InputWidthLabel from './InputWithLabel'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            users: []
        }

        this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
        this.handleAddUserData = this.handleAddUserData.bind(this);
    }

    handleOnChangeSearch(e) {
        this.setState({ searchText: e.target.value })
    };

    handleAddUserData(user) {
        this.setState({ users: this.state.users.concat(user) })
    };

    render() {
        const { users, searchText } = this.state;
        const headings = {
            title: 'Users Profile App',
            subTitle: 'Find and search your users to fast'
        }
        const filterdUsers = users.filter((user) => user.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
        return (
            <Layouts>
                <Header {...headings} />
                <SearchBar
                    value={searchText}
                    handleOnChangeSearch={this.handleOnChangeSearch}
                />
                <UserForm handleAddUserData={this.handleAddUserData} />
                <UserList users={filterdUsers} />
            </Layouts>
        )
    }
};

export default App;